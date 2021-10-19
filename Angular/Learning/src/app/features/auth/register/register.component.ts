import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  inputEmail: string = '';
  inputPassword: string = '';
  inputPasswordCheck: string = '';

  constructor(private pappatacio: AuthService) {}

  signup() {
    if (this.inputPassword === this.inputPasswordCheck) {
      this.pappatacio.register(this.inputEmail, this.inputPassword);
    }
  }

  ngOnInit(): void {}
}
