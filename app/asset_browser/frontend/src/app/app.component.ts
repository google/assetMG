import { Component } from '@angular/core';
//import { WindowRef, WindowI } from './utils/window-ref';
//import { LoaderService } from './utils/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Asset Manager';
  isLoaded = true;
}
