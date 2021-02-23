import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenInchComponent } from './ten-inch.component';

describe('TenInchComponent', () => {
  let component: TenInchComponent;
  let fixture: ComponentFixture<TenInchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenInchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenInchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
