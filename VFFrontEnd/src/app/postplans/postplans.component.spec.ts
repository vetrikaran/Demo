import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostplansComponent } from './postplans.component';

describe('PostplansComponent', () => {
  let component: PostplansComponent;
  let fixture: ComponentFixture<PostplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
