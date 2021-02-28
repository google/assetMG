import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSelectComponent } from './video-select.component';

describe('VideoSelectComponent', () => {
  let component: VideoSelectComponent;
  let fixture: ComponentFixture<VideoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
