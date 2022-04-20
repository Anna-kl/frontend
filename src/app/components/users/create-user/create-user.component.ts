import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ProfileServices} from '../../setting/profile.service';
import {DataServices} from '../../../shared/data.services';
import {Users} from '../users';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
providers: [ProfileServices]
})
export class CreateUserComponent implements OnInit {
  public accountForm: FormGroup;
  public permissionForm: FormGroup;
Account: Users;
  constructor(private formBuilder: FormBuilder, private profile: ProfileServices
  ,           private dataservice: DataServices) {
    this.createAccountForm();
    this.createPermissionForm();
  }

  createAccountForm() {
    this.accountForm = this.formBuilder.group({
      userName: [''],
      Firm: [''],
      Phone: [''],
      County: [''],
      City: [''],
      Describe: [''],
      Email: [''],
      password: [''],
      confirmPwd: ['']
    });
  }

  createPermissionForm() {
    this.permissionForm = this.formBuilder.group({
    });
  }

  ngOnInit() {

this.dataservice.users.subscribe(res => this.Account = res);
this.profile.getPassword(localStorage.getItem('token')).subscribe(
  result =>
    {
      const pass = JSON.parse(result['responce']);

      this.accountForm.setValue({
        userName: this.Account.userName,
        Firm: this.Account.Firm,
        Phone: this.Account.Phone,
        County: this.Account.Country,
        City: this.Account.City,
        Describe: this.Account.Describe,
        Email: this.Account.Email,
        password: pass.psw,
        confirmPwd: pass.psw
      });
    });
  }
  uploadFile($event) {
    const  filelist: FileList = $event.target.files;
    const  file: File = filelist[0];
    this.profile.uploadUserPic(localStorage.getItem('token'), file);
  }
}
