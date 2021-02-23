import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenInchOptionsComponent } from './ten-inch-options.component';

describe('TenInchOptionsComponent', () => {
  let component: TenInchOptionsComponent;
  let fixture: ComponentFixture<TenInchOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenInchOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenInchOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
