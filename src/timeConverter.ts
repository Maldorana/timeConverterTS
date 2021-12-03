export function timeConverter(seconds: number): string {
  let time: string = '';

  if (seconds === 0) return 'now';
  if (seconds >= 60) {
    time +=
      `${Math.floor(seconds / 60)} minute` + (seconds / 60 > 1 ? 's' : '');
    seconds = seconds % 60;
  }
  if (seconds !== 0) {
    time +=
      time === ''
        ? `${seconds} second` + (seconds > 1 ? 's' : '')
        : ` and ${seconds} second` + (seconds > 1 ? 's' : '');
  }
  return time;
}
