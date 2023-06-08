import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreplansComponent } from './preplans.component';

describe('PreplansComponent', () => {
  let component: PreplansComponent;
  let fixture: ComponentFixture<PreplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
