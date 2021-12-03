import { timeConverter } from '../src/timeConverter';

describe('timeConverter tests', () => {
  it("Should return 'now' if entered 0", () => {
    expect(timeConverter(0)).toBe('now');
  });
});
