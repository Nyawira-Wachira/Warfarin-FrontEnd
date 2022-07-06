import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabComponentComponent } from './lab-component.component';

describe('LabComponentComponent', () => {
  let component: LabComponentComponent;
  let fixture: ComponentFixture<LabComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
