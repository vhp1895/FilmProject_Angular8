import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPhimComponent } from './web-phim.component';

describe('WebPhimComponent', () => {
  let component: WebPhimComponent;
  let fixture: ComponentFixture<WebPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
