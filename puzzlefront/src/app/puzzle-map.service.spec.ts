import { TestBed } from '@angular/core/testing';

import { PuzzleMapService } from './puzzle-map.service';

describe('PuzzleMapService', () => {
  let service: PuzzleMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuzzleMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
