import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleCrosswordComponent } from './puzzle-crossword.component';

describe('PuzzleCrosswordComponent', () => {
  let component: PuzzleCrosswordComponent;
  let fixture: ComponentFixture<PuzzleCrosswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleCrosswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleCrosswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
