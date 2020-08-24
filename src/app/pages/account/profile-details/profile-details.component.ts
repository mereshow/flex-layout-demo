import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  fullName: string;
  email: string;
  alias: string;

  constructor() { }

  ngOnInit() {
    /* this.fullName = this.authService.getCurrentUser().fullName;
    this.email = this.authService.getCurrentUser().email; */
  }

}
