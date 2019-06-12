import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingLargeComponent } from './data-binding-large.component';

describe('DataBindingLargeComponent', () => {
  let component: DataBindingLargeComponent;
  let fixture: ComponentFixture<DataBindingLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
