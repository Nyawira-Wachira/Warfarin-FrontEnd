import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionregisterComponent } from './receptionregister.component';

describe('ReceptionregisterComponent', () => {
  let component: ReceptionregisterComponent;
  let fixture: ComponentFixture<ReceptionregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
