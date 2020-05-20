import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';


@Component({
  selector: 'app-doceree-ad',
  templateUrl: './doceree-ad.component.html',
  styleUrls: ['./doceree-ad.component.scss']
})
export class DocereeAdComponent implements OnInit {

  constructor(private userService: UserService) { 
  }

  ngOnInit() {
    console.log('first');
//    this.userService.loadScript('https://dev-programmatic.doceree.com/render/getJS');
    this.loadScript('https://dev-programmatic.doceree.com/render/getJS');
    //    this.loadScriptForDivData();
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.src = url;
    body.appendChild(script);
  }


}
