import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPuzzleComponent } from './generic-puzzle.component';

describe('GenericPuzzleComponent', () => {
  let component: GenericPuzzleComponent;
  let fixture: ComponentFixture<GenericPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
