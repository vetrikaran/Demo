import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdongleComponent } from './newdongle.component';

describe('NewdongleComponent', () => {
  let component: NewdongleComponent;
  let fixture: ComponentFixture<NewdongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdongleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
