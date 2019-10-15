declare var location: any;

export function getSearchQuery() {
  const pattern = /\?([^=]+\=[^\=]*\&?)*$/g;
  if (pattern.test(location.href)) {
    const res = (location as any).href.match(pattern)[0];
    return res ? res.slice(1).split("&").reduce((prev: any, next: any) => {
      const str = next.match(/([^=]+)\=(.+)/);
      try {
        prev[str[1]] = decodeURIComponent(str[2]);
      } catch (e) {
        prev[str[1]] = str[2];
      }
      return prev;
    }, {} as any) : {};
  }

  return {};
}

export default getSearchQuery;
