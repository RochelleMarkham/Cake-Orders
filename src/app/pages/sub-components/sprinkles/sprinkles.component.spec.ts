import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprinklesComponent } from './sprinkles.component';

describe('SprinklesComponent', () => {
  let component: SprinklesComponent;
  let fixture: ComponentFixture<SprinklesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprinklesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprinklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
