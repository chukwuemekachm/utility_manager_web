export function capitalize(word: string): string {
  return word[0].toUpperCase + word.substring(1);
}

export function sleep(milliseconds): void {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

export function convertFromPixelsToRem(size: number): string {
  return `${(size / 16).toFixed(4)}rem`;
}

export function transformCloudinaryURL(url, options): string {
  if (!url) {
    return '';
  }
  const splittedURL = url.split('/');
  const beforeOptions = splittedURL.slice(0, -2).join('/');
  const afterOptions = splittedURL.slice(-2).join('/');

  return beforeOptions + '/' + options.join(',') + '/' + afterOptions;
}

export default convertFromPixelsToRem;
