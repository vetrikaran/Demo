import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackinquiryComponent } from './trackinquiry.component';

describe('TrackinquiryComponent', () => {
  let component: TrackinquiryComponent;
  let fixture: ComponentFixture<TrackinquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackinquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
