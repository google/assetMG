import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStructComponent } from './account-struct.component';

describe('AccountStructComponent', () => {
  let component: AccountStructComponent;
  let fixture: ComponentFixture<AccountStructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
