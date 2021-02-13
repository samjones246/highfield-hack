import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleSequenceBComponent } from './puzzle-sequence-b.component';

describe('PuzzleSequenceBComponent', () => {
  let component: PuzzleSequenceBComponent;
  let fixture: ComponentFixture<PuzzleSequenceBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleSequenceBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleSequenceBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
