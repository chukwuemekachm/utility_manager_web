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

export default convertFromPixelsToRem;
