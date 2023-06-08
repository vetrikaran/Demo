import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinquiryComponent } from './createinquiry.component';

describe('CreateinquiryComponent', () => {
  let component: CreateinquiryComponent;
  let fixture: ComponentFixture<CreateinquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateinquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
