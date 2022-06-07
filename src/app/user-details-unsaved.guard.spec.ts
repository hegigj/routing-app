import { TestBed } from '@angular/core/testing';

import { UserDetailsUnsavedGuard } from './user-details-unsaved.guard';

describe('UserDetailsUnsavedGuard', () => {
  let guard: UserDetailsUnsavedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserDetailsUnsavedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
