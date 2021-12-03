export function timeConverter(seconds: number): string {
  if (seconds >= 60) return '1 minute';
  return seconds !== 0 ? `${seconds} second` + (seconds > 1 ? 's' : '') : 'now';
}
