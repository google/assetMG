import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  HostListener,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-progress-btn',
  templateUrl: './progress-btn.component.html',
  styleUrls: ['./progress-btn.component.css'],
})
export class ProgressBtnComponent implements OnInit {
  @Input() btnLabel: string;
  @Input() inProgress: boolean;
  @Input() disabled: boolean;
  @Input() btnUpdateMsg: string;
  @Input() isError: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    if (!this.disabled) {
      this.btnClick.emit(event);
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.active) {
  //     this.options.active = changes.active.currentValue;
  //   }
  //   if (changes.disabled) {
  //     this.options.disabled = changes.disabled.currentValue;
  //   }
  // }
}
