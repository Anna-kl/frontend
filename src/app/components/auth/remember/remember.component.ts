import { Component, OnInit } from '@angular/core';
import {AuthServices} from '../auth.services';
import {Router} from "@angular/router";

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.scss'],
  providers: [AuthServices]
})
export class RememberComponent implements OnInit {
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };
  owlcarousel = [
    {
      title: 'Добро пожаловать',
      desc: 'Представляем вашему внимаю оптовую базу',
    }];
  psw: string;
  status: string;
  authflag = false;
  link: string;
  confirm: string;
  constructor(private auth: AuthServices, private router: Router) { }

  ngOnInit() {
    const temp = localStorage.getItem('auth');
    if (temp !== null){
      this.authflag = true;
      this.link = temp;
    }
  }

  Remember() {
this.auth.rememberGenerate(this.psw).subscribe(
    result => {
      if (result['status']) {
        this.status = 'Проверьте почту';
        localStorage.setItem('auth', result['responce']);
      } else{
        this.status = 'Такой почты нет';
      }
    }
);
  }

  Confirm() {
    if (this.psw !== this.confirm){
      this.status = 'Пароли не совпадают';

    }
    else{
      this.auth.changePsw(this.psw,this.link).subscribe(
          result => {
            if (result['status']){
              this.router.navigate(['']);
              localStorage.removeItem('auth');
            } else {
              this.status = result['responce'];
              localStorage.removeItem('auth');
            }
          }
      );
    }
    localStorage.removeItem('auth');
  }
}
