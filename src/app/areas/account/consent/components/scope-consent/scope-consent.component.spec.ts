import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeConsentComponent } from './scope-consent.component';

describe('ScopeConsentComponent', () => {
  let component: ScopeConsentComponent;
  let fixture: ComponentFixture<ScopeConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopeConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
