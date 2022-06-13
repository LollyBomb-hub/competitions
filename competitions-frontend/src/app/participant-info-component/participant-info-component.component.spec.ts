import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantInfoComponentComponent } from './participant-info-component.component';

describe('ParticipantInfoComponentComponent', () => {
  let component: ParticipantInfoComponentComponent;
  let fixture: ComponentFixture<ParticipantInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
