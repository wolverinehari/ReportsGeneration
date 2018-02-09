import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportstableComponent } from './reportstable.component';

describe('ReportstableComponent', () => {
  let component: ReportstableComponent;
  let fixture: ComponentFixture<ReportstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
