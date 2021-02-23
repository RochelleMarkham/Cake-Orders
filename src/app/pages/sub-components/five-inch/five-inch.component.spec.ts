import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveInchComponent } from './five-inch.component';

describe('FiveInchComponent', () => {
  let component: FiveInchComponent;
  let fixture: ComponentFixture<FiveInchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveInchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveInchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
