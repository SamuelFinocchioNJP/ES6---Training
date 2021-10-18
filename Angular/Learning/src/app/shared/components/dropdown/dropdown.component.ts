import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdownItem } from './interfaces/dropdown-item.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() dropdownItems: Array<IDropdownItem> = [];
  @Output() onDropdownItemClicked: EventEmitter<IDropdownItem> =
    new EventEmitter();

  isOpen: boolean = false;

  lastClickedStored: IDropdownItem | undefined;

  dropdownItemClicked(clicked: IDropdownItem) {
    this.lastClickedStored = clicked;
    this.onDropdownItemClicked.emit(clicked);
  }

  lastClicked(item: IDropdownItem): boolean {
    return this.lastClickedStored?.name === item.name;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}

  ngOnInit(): void {}
}
