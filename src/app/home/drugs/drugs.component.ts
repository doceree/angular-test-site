import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.loadScript('https://dev-programmatic.doceree.com/render/getJS');
  }

}
