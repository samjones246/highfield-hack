import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleSequenceAComponent } from './puzzle-sequence-a.component';

describe('PuzzleSequenceAComponent', () => {
  let component: PuzzleSequenceAComponent;
  let fixture: ComponentFixture<PuzzleSequenceAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleSequenceAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleSequenceAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
