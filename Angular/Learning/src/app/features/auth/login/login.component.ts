import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: AuthService) {}

  inputEmail: string = 'Papera';
  inputPassword: string = '';

  signin() {
    if (this.loginService.login(this.inputEmail, this.inputPassword)) {
      alert('Login effettuato con successo');
    } else {
      alert('Password o email errati');
    }
  }
  ngOnInit(): void {}
}
