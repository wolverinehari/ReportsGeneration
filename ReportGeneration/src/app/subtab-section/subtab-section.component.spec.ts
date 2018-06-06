import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtabSectionComponent } from './subtab-section.component';

describe('SubtabSectionComponent', () => {
  let component: SubtabSectionComponent;
  let fixture: ComponentFixture<SubtabSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtabSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtabSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
