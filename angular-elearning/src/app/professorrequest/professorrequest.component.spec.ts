import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorrequestComponent } from './professorrequest.component';

describe('ProfessorrequestComponent', () => {
  let component: ProfessorrequestComponent;
  let fixture: ComponentFixture<ProfessorrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
