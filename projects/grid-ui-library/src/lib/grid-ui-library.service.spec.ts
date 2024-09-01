import { TestBed } from '@angular/core/testing';

import { GridUiLibraryService } from './grid-ui-library.service';

describe('GridUiLibraryService', () => {
  let service: GridUiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridUiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
