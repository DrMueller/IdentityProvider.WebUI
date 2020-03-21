import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeConsentListComponent } from './scope-consent-list.component';

describe('ScopeConsentListComponent', () => {
  let component: ScopeConsentListComponent;
  let fixture: ComponentFixture<ScopeConsentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopeConsentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeConsentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
