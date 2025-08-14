import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableDemo5Component } from './observable-demo5.component';

describe('ObservableDemo5Component', () => {
  let component: ObservableDemo5Component;
  let fixture: ComponentFixture<ObservableDemo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableDemo5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableDemo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
