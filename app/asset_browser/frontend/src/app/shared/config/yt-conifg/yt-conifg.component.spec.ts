import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtConifgComponent } from './yt-conifg.component';

describe('YtConifgComponent', () => {
  let component: YtConifgComponent;
  let fixture: ComponentFixture<YtConifgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtConifgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtConifgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
