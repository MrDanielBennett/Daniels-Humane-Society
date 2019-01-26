import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitUsComponent } from './visit-us.component';

describe('VisitUsComponent', () => {
  let component: VisitUsComponent;
  let fixture: ComponentFixture<VisitUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
