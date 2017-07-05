export function extractHostname(url = "") {
  let hostname = "";
  //find & remove protocol (http, ftp, etc.) and get hostname
  if (url.indexOf("://") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }
  //find & remove port number
  hostname = hostname.split(":")[0];
  //find & remove "?"
  hostname = hostname.split("?")[0];
  return hostname;
}

export function extractRootDomain(url = "") {
  let domain = extractHostname(url),
    splitArr = domain.split("."),
    arrLen = splitArr.length;
  //extracting the root domain here
  if (arrLen > 2) {
    domain = splitArr[arrLen - 2] + "." + splitArr[arrLen - 1];
  }
  return domain;
}
