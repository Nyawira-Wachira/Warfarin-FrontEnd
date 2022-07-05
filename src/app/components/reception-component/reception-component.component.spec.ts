import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionComponentComponent } from './reception-component.component';

describe('ReceptionComponentComponent', () => {
  let component: ReceptionComponentComponent;
  let fixture: ComponentFixture<ReceptionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
