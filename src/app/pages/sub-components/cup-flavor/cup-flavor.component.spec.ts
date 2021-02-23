import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupFlavorComponent } from './cup-flavor.component';

describe('CupFlavorComponent', () => {
  let component: CupFlavorComponent;
  let fixture: ComponentFixture<CupFlavorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupFlavorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupFlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
