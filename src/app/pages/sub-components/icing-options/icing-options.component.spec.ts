import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcingOptionsComponent } from './icing-options.component';

describe('IcingOptionsComponent', () => {
  let component: IcingOptionsComponent;
  let fixture: ComponentFixture<IcingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcingOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
