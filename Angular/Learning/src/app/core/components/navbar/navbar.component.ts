import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { INavItem } from './interfaces/nav-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  @Input() navItems: Array<INavItem> = [];
  @Output() onHomeButtonClicked: EventEmitter<string> = new EventEmitter<string>();

  homeClicked() {
    this.onHomeButtonClicked.emit("SAMUEL FINOCCHIO E' MAGRO");
  }

  ngOnInit(): void {
    console.log(this.navItems);
  }
}
