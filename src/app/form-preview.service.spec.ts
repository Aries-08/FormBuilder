import { TestBed } from '@angular/core/testing';

import { FormPreviewService } from './form-preview.service';

describe('FormPreviewService', () => {
  let service: FormPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
