import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionModalCreationComponent } from './competition-modal-creation.component';

describe('CompetitionModalCreationComponent', () => {
  let component: CompetitionModalCreationComponent;
  let fixture: ComponentFixture<CompetitionModalCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionModalCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionModalCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
