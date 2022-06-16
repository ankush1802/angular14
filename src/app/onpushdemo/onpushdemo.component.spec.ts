import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushdemoComponent } from './onpushdemo.component';

describe('OnpushdemoComponent', () => {
  let component: OnpushdemoComponent;
  let fixture: ComponentFixture<OnpushdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnpushdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
