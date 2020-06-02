import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  temp: boolean = true;
  constructor(private loaderService: LoaderService) {}
}
