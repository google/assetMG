import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchPlaceholder: string = '';
  searchStr: string = '';
  filterStr: string = 'ALL';

  @Input() searchPlaceholderTxt;
  @Input() filterOptions;
  @Output()
  searchCriteria = new EventEmitter<String>();
  @Output() filterCriteria = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {
    this.searchPlaceholder = this.searchPlaceholderTxt;
  }

  checkPlaceHolder() {
    if (this.searchPlaceholder) {
      this.searchPlaceholder = null;
      return;
    } else {
      this.searchPlaceholder = this.searchPlaceholderTxt;
      return;
    }
  }

  searchThis() {
    this.searchCriteria.emit(this.searchStr);
  }

  applyFilter() {
    this.filterCriteria.emit(this.filterStr);
  }
}
