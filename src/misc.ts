export function capitalize(word: string) {
  return word[0].toUpperCase + word.substring(1);
}

export function sleep(milliseconds) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
