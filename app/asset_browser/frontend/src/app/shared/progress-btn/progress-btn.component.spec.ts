import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBtnComponent } from './progress-btn.component';

describe('ProgressBtnComponent', () => {
  let component: ProgressBtnComponent;
  let fixture: ComponentFixture<ProgressBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
