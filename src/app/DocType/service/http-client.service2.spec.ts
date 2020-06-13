import { TestBed } from '@angular/core/testing';

import { HttpClientService2 } from './http-client.service2';

describe('HttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientService2 = TestBed.get(HttpClientService2);
    expect(service).toBeTruthy();
  });
});
