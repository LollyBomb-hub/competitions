import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionModalUpdateComponent } from './competition-modal-update.component';

describe('CompetitionModalUpdateComponent', () => {
  let component: CompetitionModalUpdateComponent;
  let fixture: ComponentFixture<CompetitionModalUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionModalUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionModalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
