export function timeConverter(inputSeconds: number): string {
  let minutes: string = '';
  let seconds: string = '';
  let hours: string = '';

  if (inputSeconds === 0) return 'now';

  if (inputSeconds >= 3600) {
    hours =
      `${Math.floor(inputSeconds / 3600)}` +
      (Math.floor(inputSeconds / 3600) > 1 ? ' hours' : ' hour');
    inputSeconds = inputSeconds % 3600;
  }

  if (inputSeconds >= 60) {
    minutes =
      `${Math.floor(inputSeconds / 60)}` +
      (Math.floor(inputSeconds / 60) > 1 ? ' minutes' : ' minute');
    inputSeconds = inputSeconds % 60;
  }

  if (inputSeconds < 60) {
    seconds =
      inputSeconds === 0
        ? ''
        : inputSeconds.toString() + (inputSeconds > 1 ? ' seconds' : ' second');
  }

  return (
    hours +
    (hours !== '' && minutes !== '' && seconds !== '' ? ', ' : '') +
    (hours !== '' && minutes !== '' && seconds === '' ? ' and ' : '') +
    minutes +
    (minutes !== '' && seconds !== '' ? ' and ' : '') +
    seconds
  );
}
