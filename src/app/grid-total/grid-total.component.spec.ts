import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTotalComponent } from './grid-total.component';

describe('GridTotalComponent', () => {
  let component: GridTotalComponent;
  let fixture: ComponentFixture<GridTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
