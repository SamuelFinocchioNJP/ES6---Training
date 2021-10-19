import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { IPerson } from 'src/app/shared/interfaces/person.interface';
import { INavItem } from './core/components/navbar/interfaces/nav-item.interface';
import { AuthService } from './features/auth/login/auth.service';
import { IDropdownItem } from './shared/components/dropdown/interfaces/dropdown-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('paperella', { static: true }) pp!: ElementRef;

  login: boolean = true;
  isVisible: boolean = false;
  ngAfterViewInit() {
    if (this.pp) {
      this.pp.nativeElement.innerHTML = 'Whale!';
    }
  }

  constructor(public loginService: AuthService) {
    console.log(document.getElementById('paperella'));
  }

  navItems: Array<INavItem> = [
    { displayName: 'google', url: 'https://www.google.com' },
    { displayName: 'facebook', url: 'https://www.facebook.com' },
    { displayName: 'twitter', url: 'https://www.twitter.com' },
  ];

  dropdownElements: Array<IDropdownItem> = [
    { name: 'Drodown 1' },
    { name: 'Drodown 2' },
    { name: 'Drodown 3' },
    { name: 'Drodown 4' },
  ];

  cond = true;
  tonno = null;

  doSomething(name: string): void {
    alert(name);
  }

  dropdownRaised(clicked: IDropdownItem) {
    console.log(clicked);
  }

  oggi: Date = new Date();
  title: string = 'Tricheco';
  person: IPerson = {
    name: 'Mario',
    surname: 'Rossi',
  };
}
