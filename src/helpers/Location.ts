export default class Location {
  public static getSearchValue(param: string): string | void {
    const args = location.search && location.search.split('?')[1];
    const splittedArgs = args && args.split('&');
    const valueWithEqualSign = splittedArgs && splittedArgs.find(element => element.startsWith(`${param}=`));
    if (valueWithEqualSign) {
      return valueWithEqualSign.split('=')[1].replace(/\+/g, ' ');
    }
  }
}
