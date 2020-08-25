import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetGridComponent } from './asset-grid.component';

describe('AssetGridComponent', () => {
  let component: AssetGridComponent;
  let fixture: ComponentFixture<AssetGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
