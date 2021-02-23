import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveAndDimeOptionsComponent } from './five-and-dime-options.component';

describe('FiveAndDimeOptionsComponent', () => {
  let component: FiveAndDimeOptionsComponent;
  let fixture: ComponentFixture<FiveAndDimeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveAndDimeOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveAndDimeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
