import { TestBed, inject } from '@angular/core/testing';

import { ExpressionGeneratorService } from './expression-generator.service';

describe('ExpressionGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpressionGeneratorService]
    });
  });

  it('should be created', inject([ExpressionGeneratorService], (service: ExpressionGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
