import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { CookieService } from 'ngx-cookie-service';
//crypto.createHash('sha256').update(doc.NPI.toString()).digest('hex');
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isSubmitted = false;
  country = 'US';
  cookieValue: any;
  cookieIndicator: boolean;
  userObj: string;
  userObjHashed: string;
  constructor(private router: Router, public fb: FormBuilder,private cookieService: CookieService) {
    
    router.events.subscribe( (event: Event) =>  {
        if (event instanceof NavigationEnd) {
            // Navigation Ended Successfully.
            console.log(event.url);
            this.cookieValue = this.cookieService.get('_docereeContext');
            console.log('cookie Value: ', this.cookieValue);
            if(this.cookieValue === '') {
              this.cookieIndicator = false;
            } else {
              this.cookieIndicator = true;
              this.userObj = localStorage.getItem('hcpDetails');
              this.country = localStorage.getItem('country');
              if(this.country === 'US') {
                this.userObjHashed = localStorage.getItem('hcpDetailsHashed');
              } else {
                this.userObjHashed = '';
              }
            }
        }

    });
  }

  ngOnInit() {
  }

  radioChange($event: MatRadioChange) {
    if($event.value === 'US') {
      this.country = 'US';
    } else {
      this.country = 'India';
    }
  }

  login() {
    const body = <HTMLDivElement> document.body;
    let userObj = {
      firstName: 'Scott',  
      lastName: 'Ames',
      specialization: 'Anesthesiology',
      zipCode: '11234',
      gender: 'Male'
    };

  const el = document.createElement('script');
  el.innerText = "docereeLogIn(" + JSON.stringify(userObj) + ");"
  body.appendChild(el);
  console.log('appending login');
  this.router.navigate(["../news"]);
  }
  /*########### Template Driven Form ###########*/
  docereeContextIndia = this.fb.group({
    fname: '',
    lname: '',
    email: '',
    specialization: '',
    city: '',
    mciRegistrationNumber: '',
    zipcode: '',
    mobile: '',
    npi: '',
    gender: ['male']
  });

  docereeContextUS = this.fb.group({
    NPI: '',
    Email: '',
  });

  async sha256(message) {

    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    
    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
}

  // Submit Registration Form
  async onSubmit() {
    if(this.country === 'US') {


      const hashNPI = await this.sha256(this.docereeContextUS.value.NPI);
      const hashEmail = await this.sha256(this.docereeContextUS.value.Email);

      localStorage.setItem('hcpDetails', JSON.stringify({
        NPI: this.docereeContextUS.value.NPI,
        Email: this.docereeContextUS.value.Email
      }));
      
      const body = <HTMLDivElement> document.body;
      let userObj = { 
        hashedNPI: hashNPI,  
        hashedEmail: hashEmail
      };
      localStorage.setItem('hcpDetailsHashed', JSON.stringify(userObj));
      const el = document.createElement('script');
      el.innerText = "docereeLogIn(" + JSON.stringify(userObj) + ");"
      body.appendChild(el);
      localStorage.setItem('country', 'US');
      console.log('logging in docereeContext');
      this.router.navigate(["../news"]);
    } else {
      const body = <HTMLDivElement> document.body;
      let userObj = { 
        firstName: this.docereeContextIndia.value.fname,  
        lastName: this.docereeContextIndia.value.lname,
        email: this.docereeContextIndia.value.email,
        specialization: this.docereeContextIndia.value.specialization,
        city: this.docereeContextIndia.value.city,
        mciRegistrationNumber: this.docereeContextIndia.value.mciRegistrationNumber,
        zipCode: this.docereeContextIndia.value.zipcode,
        mobile: this.docereeContextIndia.value.mobile,
        gender: this.docereeContextIndia.value.gender,
      };
      localStorage.setItem('hcpDetails', JSON.stringify(userObj));
      const el = document.createElement('script');
      el.innerText = "docereeLogIn(" + JSON.stringify(userObj) + ");"
      body.appendChild(el);
      localStorage.setItem('country', 'India');
      console.log('logging in docereeContext');
      this.router.navigate(["../news"]);
    }

  }

}
