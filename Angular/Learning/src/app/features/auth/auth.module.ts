import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './login/auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, FormsModule],
  providers: [AuthService],
})
export class AuthModule {}
