import { TestBed } from '@angular/core/testing';

import { HttpClientService3 } from './http-client.service3';

describe('HttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientService3 = TestBed.get(HttpClientService3);
    expect(service).toBeTruthy();
  });
});
