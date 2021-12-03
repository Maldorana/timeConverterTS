export function timeConverter(seconds: number): string {
  if (seconds >= 60)
    return `${seconds / 60} minute` + (seconds / 60 > 1 ? 's' : '');
  return seconds !== 0 ? `${seconds} second` + (seconds > 1 ? 's' : '') : 'now';
}
