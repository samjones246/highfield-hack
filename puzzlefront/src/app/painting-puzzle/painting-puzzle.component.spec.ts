import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingPuzzleComponent } from './painting-puzzle.component';

describe('PaintingPuzzleComponent', () => {
  let component: PaintingPuzzleComponent;
  let fixture: ComponentFixture<PaintingPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
