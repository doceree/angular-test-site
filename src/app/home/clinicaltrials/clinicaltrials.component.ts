import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-clinicaltrials',
  templateUrl: './clinicaltrials.component.html',
  styleUrls: ['./clinicaltrials.component.css']
})
export class ClinicaltrialsComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.loadScript('https://dev-programmatic.doceree.com/render/getJS');
  }

}
