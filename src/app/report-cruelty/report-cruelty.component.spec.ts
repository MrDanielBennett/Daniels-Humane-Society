import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCrueltyComponent } from './report-cruelty.component';

describe('ReportCrueltyComponent', () => {
  let component: ReportCrueltyComponent;
  let fixture: ComponentFixture<ReportCrueltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCrueltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCrueltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
