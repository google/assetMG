import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchPlaceholder: string = 'Search your assets';
  searchStr: string = '';

  @Output() searchCriteria = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {}

  checkPlaceHolder() {
    if (this.searchPlaceholder) {
      this.searchPlaceholder = null;
      return;
    } else {
      this.searchPlaceholder = 'Search your assets';
      return;
    }
  }

  searchThis() {
    this.searchCriteria.emit(this.searchStr);
  }
}
