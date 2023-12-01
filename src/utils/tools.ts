
interface QueryParams {
  [key: string]: string;
}

export function getQueryParams (url:string) {
  const queryParams:QueryParams = {};
  const paramsString = url.split('?')[1];
  if (paramsString) {
    const paramsArray = paramsString.split('&');
    for (const element of paramsArray) {
      const param = element.split('=');
      const key = decodeURIComponent(param[0]);
      const value = decodeURIComponent(param[1]);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

