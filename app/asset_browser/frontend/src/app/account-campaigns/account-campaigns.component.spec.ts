import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCampaignsComponent } from './account-campaigns.component';

describe('AccountCampaignsComponent', () => {
  let component: AccountCampaignsComponent;
  let fixture: ComponentFixture<AccountCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
