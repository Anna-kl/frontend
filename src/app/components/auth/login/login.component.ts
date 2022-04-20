import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthServices} from '../auth.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthServices]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public tokens: string;
  public auth = false;


  constructor(private formBuilder: FormBuilder, private authservice: AuthServices,
              private router: Router) {
    this.createLoginForm();
    this.createRegisterForm();
  }

  owlcarousel = [
    {
      title: 'Добро пожаловать',
      desc: 'Представляем вашему внимаю оптовую базу',
    },
    // {
    //   title: "Welcome to Multikart",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    // },
    // {
    //   title: "Welcome to Multikart",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    // }
  ]
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };


  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
      error: '',
    });
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required,  Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      error: '',
    });
  }

  TokensData() {
    if (this.loginForm.valid){
    this.authservice.getAuth(this.loginForm.get('userName').value, this.loginForm.get('password').value).subscribe(
        result => {
          if (result['status']) {
            this.tokens = JSON.parse(result['responce']);
            localStorage.setItem('token', JSON.stringify(this.tokens));

              this.router.navigate(['/settings/profile']);

          } else{
            this.loginForm.setValue({error: 'Нет такого пользователя', userName: '', password: ''});
          }
        }
    );
  } else{
      this.loginForm.setValue({error: 'Не все поля введены', userName: '', password: ''});
    }
  }
  ngOnInit() {
    const  temp = JSON.parse(localStorage.getItem('token'));
    if (temp !== null) {
      if (new Date(temp['access_expire']).getTime() > Date.now()) {
        this.router.navigate(['/settings/profile']);
    }
    }
}

  Register() {
    if (this.registerForm.valid){
    if (this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value) {
this.registerForm.setValue({error: 'Пароли не совпадают', userName: '', password: ''});
    }
    this.authservice.registration(this.registerForm.get('userName').value, this.registerForm.get('password').value).subscribe(
        result => {
          if (result['status']) {
            this.tokens = JSON.parse(result['responce']);
            localStorage.setItem('token', JSON.stringify(this.tokens));

            this.router.navigate(['/users/create-user']);

          } else {
            this.registerForm.setValue({error: 'Такой пользователь уже существует', userName: '', password: ''});
          }
        }
    );
  } else{
      if (this.registerForm.controls['userName'].valid === false){
        this.registerForm.setValue({error: 'Почта введена не верно', userName: '', password: '',
          confirmPassword: ''});
      } else {
        this.registerForm.setValue({error: 'Пароль должен быть не менее 8 символов', userName: '', password: '',
          confirmPassword: ''});
      }
    }
  }
}
