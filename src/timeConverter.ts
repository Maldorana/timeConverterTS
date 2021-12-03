export function timeConverter(seconds: number): string {
  return seconds !== 0 ? `${seconds} second` + (seconds > 1 ? 's' : '') : 'now';
}
