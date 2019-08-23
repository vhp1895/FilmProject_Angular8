import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDateRowComponent } from './show-date-row.component';

describe('ShowDateRowComponent', () => {
  let component: ShowDateRowComponent;
  let fixture: ComponentFixture<ShowDateRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDateRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDateRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
