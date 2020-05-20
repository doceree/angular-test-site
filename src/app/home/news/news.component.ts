import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.loadScript('https://dev-programmatic.doceree.com/render/getJS');
  }

}
