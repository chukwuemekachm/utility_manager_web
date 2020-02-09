export function transformCloudinaryURL(url, options) {
  if (!url) {
    return '';
  }
  const splittedURL = url.split('/');
  const beforeOptions = splittedURL.slice(0, -2).join('/');
  const afterOptions = splittedURL.slice(-2).join('/');

  return beforeOptions + '/' + options.join(',') + '/' + afterOptions;
}
