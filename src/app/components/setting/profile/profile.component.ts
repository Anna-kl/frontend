import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProfileServices} from '../profile.service';
import {Users} from '../../users/users';
import { DomSanitizer } from '@angular/platform-browser';
import {DataServices} from '../../../shared/data.services';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
    providers: [ProfileServices]
})
export class ProfileComponent implements OnInit {
  Account: Users;


  constructor( private profile: ProfileServices, private dataservice: DataServices) {

  }

  ngOnInit() {
      this.dataservice.users.subscribe(result => this.Account = result);
  }



}
