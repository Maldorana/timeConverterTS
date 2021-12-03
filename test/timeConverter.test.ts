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
    it("Should return '2 minutes' if entered 120", () => {
      expect(timeConverter(120)).toBe('2 minutes');
    });
    it("Should return '2 minutes and 1 second' if entered 121", () => {
      expect(timeConverter(121)).toBe('2 minutes and 1 second');
    });
  });

  describe('minutes and seconds', () => {
    it("Should return '1 hour' if entered 3600", () => {
      expect(timeConverter(3600)).toBe('1 hour');
    });
    it("Should return '2 hours' if entered 7200", () => {
      expect(timeConverter(7200)).toBe('2 hours');
    });
    it("Should return '2 hours and 2 minutes' if entered 7320", () => {
      expect(timeConverter(7320)).toBe('2 hours and 2 minutes');
    });
  });
});
