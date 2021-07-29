import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlinksComponent } from './addlinks.component';

describe('AddlinksComponent', () => {
  let component: AddlinksComponent;
  let fixture: ComponentFixture<AddlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
