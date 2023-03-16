import preloadAll from 'jest-next-dynamic';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

beforeAll(async () => {
  await preloadAll();
});

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});
