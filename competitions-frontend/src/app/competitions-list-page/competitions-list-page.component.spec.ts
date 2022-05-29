import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsListPageComponent } from './competitions-list-page.component';

describe('CompetitionsListPageComponent', () => {
  let component: CompetitionsListPageComponent;
  let fixture: ComponentFixture<CompetitionsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
