import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasCheckComponent } from './saas-check.component';

describe('SaasCheckComponent', () => {
  let component: SaasCheckComponent;
  let fixture: ComponentFixture<SaasCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
