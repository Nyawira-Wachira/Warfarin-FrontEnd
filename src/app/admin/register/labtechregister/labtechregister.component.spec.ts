import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechregisterComponent } from './labtechregister.component';

describe('LabtechregisterComponent', () => {
  let component: LabtechregisterComponent;
  let fixture: ComponentFixture<LabtechregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtechregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
