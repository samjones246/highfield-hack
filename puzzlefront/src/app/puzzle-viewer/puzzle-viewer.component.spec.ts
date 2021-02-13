import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleViewerComponent } from './puzzle-viewer.component';

describe('PuzzleViewerComponent', () => {
  let component: PuzzleViewerComponent;
  let fixture: ComponentFixture<PuzzleViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
