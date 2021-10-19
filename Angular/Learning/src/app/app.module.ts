import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { LabelComponent } from './shared/components/label/label.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { FattenDirective } from './shared/directives/fatten.directive';
import { RandomcasePipe } from './shared/pipes/randomcase.pipe';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LabelComponent,
    NavbarComponent,
    DropdownComponent,
    FattenDirective,
    RandomcasePipe,
  ],
  imports: [BrowserModule, FormsModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
