export function timeConverter(seconds: number): string {
  let time: string[] = [];

  if (seconds === 0) return 'now';

  if (seconds >= 3600) {
    time.push(
      `${Math.floor(seconds / 3600)}` +
        (Math.floor(seconds / 3600) > 1 ? ' hours' : ' hour')
    );
    seconds = seconds % 3600;
  }

  if (seconds >= 60) {
    time.push(
      `${Math.floor(seconds / 60)}` +
        (Math.floor(seconds / 60) > 1 ? ' minutes' : ' minute')
    );
    seconds = seconds % 60;
  }

  if (seconds > 0) {
    time.push(seconds.toString() + (seconds > 1 ? ' seconds' : ' second'));
  }

  return time.reduce(
    (previous, current, index) =>
      previous + (index < time.length - 1 ? ', ' : ' and ') + current
  );
}
