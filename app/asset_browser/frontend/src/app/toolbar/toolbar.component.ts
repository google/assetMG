import { Subscription } from 'rxjs';

import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

// import { MatSelectChange } from '@angular/material';


interface Account {
  value: number,
  viewValue: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
})

export class ToolbarComponent{
  // we need to import the accounts here. hardcoded for demo
  accounts: Account[] = [
    {value: 1234567897, viewValue: 'AppAccount US iOS'},
    {value: 9998887897, viewValue: 'AppAccount US Android'},
    {value: 1112223344, viewValue: 'AppAccount Canada'}
  ];

}



// import { Component} from '@angular/core';
// interface Food {
//   value: string;
//   viewValue: string;
// }

// /**
//  * @title Basic select
//  */
// @Component({
//   selector: 'app-toolbar',
//   templateUrl: './toolbar.component.html',
//   styleUrls: ['./toolbar.component.css'],
// })
// export class ToolbarComponent {
//   foods: Food[] = [
//     {value: 'steak-0', viewValue: 'Steak'},
//     {value: 'pizza-1', viewValue: 'Pizza'},
//     {value: 'tacos-2', viewValue: 'Tacos'}
//   ];
// }
