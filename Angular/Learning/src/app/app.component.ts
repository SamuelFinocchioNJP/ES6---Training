import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/shared/interfaces/person.interface';
import { INavItem } from './core/components/navbar/interfaces/nav-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
    console.log(document.getElementById('paperella'));
  }

  navItems: Array<INavItem> = [
    { displayName: 'google', url: 'https://www.google.com' },
    { displayName: 'facebook', url: 'https://www.facebook.com' },
    { displayName: 'twitter', url: 'https://www.twitter.com' },
  ];

  tonno = null;
  ngOnInit(): void {
    console.log(document.getElementById('paperella'));
  }

  doSomething(name: string): void {
    alert(name);
  }

  oggi: Date = new Date();
  title: string = 'Tricheco';
  person: IPerson = {
    name: 'Mario',
    surname: 'Rossi',
  };
}
