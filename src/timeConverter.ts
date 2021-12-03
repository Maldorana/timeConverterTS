export function timeConverter(seconds: number): string {
  return seconds !== 0 ? '1 second' : 'now';
}
