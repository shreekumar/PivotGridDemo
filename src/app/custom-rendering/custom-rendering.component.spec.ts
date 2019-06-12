import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRenderingComponent } from './custom-rendering.component';

describe('CustomRenderingComponent', () => {
  let component: CustomRenderingComponent;
  let fixture: ComponentFixture<CustomRenderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRenderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
