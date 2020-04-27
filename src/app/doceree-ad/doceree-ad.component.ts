import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doceree-ad',
  templateUrl: './doceree-ad.component.html',
  styleUrls: ['./doceree-ad.component.scss']
})
export class DocereeAdComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    console.log('first')
    this.loadScriptForDivData();
    this.loginToDoceree();
    console.log('2nd load')
    this.loadScriptForDivData2();
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.src = url;
    body.appendChild(script);
  }

  public loadScriptForDivData() {
    const el = <HTMLDivElement> document.getElementById('DOC_frpgajk61rjp7d');
    const script = document.createElement('script');
    script.innerText = "var requestedAdIds = requestedAdIds || [];requestedAdIds.push({contet_id:'DOC_frpgajk61rjp7d',content_sizes:['200 x 200'],content_type:'img'});";  
    el.appendChild(script);
    this.loadScript('http://localhost:2007/getJS.js');
  }

  public loadScriptForDivData2() {
    const el = <HTMLDivElement> document.getElementById('DOC_frpgajk627nsx9');
    const script = document.createElement('script');
    script.innerText = "var requestedAdIds = requestedAdIds || [];requestedAdIds.push({contet_id:'DOC_frpgajk627nsx9',content_sizes:['250 x 250'],content_type:'img'});";  
    el.appendChild(script);
    this.loadScript('http://localhost:2007/getJS.js');
  }

  public loginToDoceree() {
    const body = <HTMLDivElement> document.body;
    let userObj = {
      firstName: 'Scott',  
      lastName: 'Ames',
      specialization: 'Anesthesiology',
      zipCode: '11234',
      gender: 'Male'
  }

  const el = document.createElement('script');
  el.innerText = "docereeLogIn(" + JSON.stringify(userObj) + ");"
  body.appendChild(el);
  console.log('appending login')
  }

  // script.innerText = 
  //   script.innerText = '';
  

}
