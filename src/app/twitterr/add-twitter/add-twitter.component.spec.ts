import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTwitterComponent } from './add-twitter.component';

describe('AddTwitterComponent', () => {
  let component: AddTwitterComponent;
  let fixture: ComponentFixture<AddTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
