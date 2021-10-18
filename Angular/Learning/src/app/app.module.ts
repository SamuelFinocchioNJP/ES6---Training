import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { LabelComponent } from './shared/components/label/label.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { FattenDirective } from './shared/directives/fatten.directive';
import { RandomcasePipe } from './shared/pipes/randomcase.pipe';

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
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
