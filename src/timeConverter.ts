const time: any = {
  year: 31536000,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

export function timeConverter(seconds: number): string {
  let convertedTime: string[] = [];

  if (seconds === 0) return 'now';

  for (const key in time) {
    if (seconds >= time[key]) {
      let val: string =
        `${Math.floor(seconds / time[key])}` +
        ` ${key}` +
        (Math.floor(seconds / time[key]) > 1 ? 's' : '');
      convertedTime.push(val);
      seconds = seconds % time[key];
    }
  }

  return convertedTime.reduce(
    (previous, current, index) =>
      previous + (index < convertedTime.length - 1 ? ', ' : ' and ') + current
  );
}
