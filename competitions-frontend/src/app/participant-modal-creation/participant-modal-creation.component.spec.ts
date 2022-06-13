import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantModalCreationComponent } from './participant-modal-creation.component';

describe('ParticipantModalCreationComponent', () => {
  let component: ParticipantModalCreationComponent;
  let fixture: ComponentFixture<ParticipantModalCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantModalCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantModalCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
