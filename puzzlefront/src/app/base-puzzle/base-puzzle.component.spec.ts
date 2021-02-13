import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePuzzleComponent } from './base-puzzle.component';

describe('BasePuzzleComponent', () => {
  let component: BasePuzzleComponent;
  let fixture: ComponentFixture<BasePuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
