import { timeConverter } from '../src/timeConverter';

describe('timeConverter tests', () => {
  it("Should return 'now' if entered 0", () => {
    expect(timeConverter(0)).toBe('now');
  });
  it("Should return '1 second' if entered 1", () => {
    expect(timeConverter(1)).toBe('1 second');
  });
});
