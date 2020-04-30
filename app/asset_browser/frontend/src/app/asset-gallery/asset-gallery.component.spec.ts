import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetGalleryComponent } from './asset-gallery.component';

describe('AssetGalleryComponent', () => {
  let component: AssetGalleryComponent;
  let fixture: ComponentFixture<AssetGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
