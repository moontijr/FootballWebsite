import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotwComponent } from './totw.component';

describe('TotwComponent', () => {
  let component: TotwComponent;
  let fixture: ComponentFixture<TotwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
