import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTwitterComponent } from './list-twitter.component';

describe('ListTwitterComponent', () => {
  let component: ListTwitterComponent;
  let fixture: ComponentFixture<ListTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
