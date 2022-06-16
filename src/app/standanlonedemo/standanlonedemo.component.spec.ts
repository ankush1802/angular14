import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandanlonedemoComponent } from './standanlonedemo.component';

describe('StandanlonedemoComponent', () => {
  let component: StandanlonedemoComponent;
  let fixture: ComponentFixture<StandanlonedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandanlonedemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandanlonedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
