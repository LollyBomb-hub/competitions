import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantRegistrationComponent } from './participant-registration.component';

describe('ParticipantRegistrationComponentComponent', () => {
  let component: ParticipantRegistrationComponent;
  let fixture: ComponentFixture<ParticipantRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
