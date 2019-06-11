import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotgridComponent } from './pivotgrid.component';

describe('PivotgridComponent', () => {
  let component: PivotgridComponent;
  let fixture: ComponentFixture<PivotgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
