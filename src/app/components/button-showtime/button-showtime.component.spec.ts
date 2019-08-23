import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowtimeComponent } from './button-showtime.component';

describe('ButtonShowtimeComponent', () => {
  let component: ButtonShowtimeComponent;
  let fixture: ComponentFixture<ButtonShowtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonShowtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonShowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
