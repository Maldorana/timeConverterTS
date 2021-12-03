import { timeConverter } from '../src/timeConverter';

describe('timeConverter tests', () => {
  describe('only seconds', () => {
    it("Should return 'now' if entered 0", () => {
      expect(timeConverter(0)).toBe('now');
    });
    it("Should return '1 second' if entered 1", () => {
      expect(timeConverter(1)).toBe('1 second');
    });
    it("Should return '24 seconds' if entered 24", () => {
      expect(timeConverter(24)).toBe('24 seconds');
    });
  });

  describe('minutes and seconds', () => {
    it("Should return '1 minute' if entered 60", () => {
      expect(timeConverter(60)).toBe('1 minute');
    });
  });
});