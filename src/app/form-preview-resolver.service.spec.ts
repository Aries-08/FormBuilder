import { TestBed } from '@angular/core/testing';

import { FormPreviewResolverService } from './form-preview-resolver.service';

describe('FormPreviewResolverService', () => {
  let service: FormPreviewResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPreviewResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
