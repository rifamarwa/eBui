import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTwitterComponent } from './update-twitter.component';

describe('UpdateTwitterComponent', () => {
  let component: UpdateTwitterComponent;
  let fixture: ComponentFixture<UpdateTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
