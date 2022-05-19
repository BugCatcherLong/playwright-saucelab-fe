import { test } from '@playwright/test';

const fixtures = {
  test,
  it: test,
  describe: test.describe,
  beforeEach: test.beforeEach,
  beforeAll: test.beforeAll,
  afterEach: test.afterEach,
  afterAll: test.afterAll
};

export { fixtures };
