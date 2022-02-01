/**
 * @description No support IE
 * @param key
 * @param value
 * @param days expires from today
 * @returns void
 */
function setCookie(key: string, value: string, days: number) {
  document.cookie = `${key}=${value};path=/;max-age=${60 * 60 * 24 * days};`;
}

/**
 * @param key
 * @returns [key, value] | undefined
 */
function getCookie(key: string) {
  return document.cookie
    .split(";")
    .find((value) => value.startsWith(key))
    ?.split("=");
}

/**
 * @param key
 * @returns void
 */
function removeCookie(key: string) {
  document.cookie = key + "=;max-age=0;";
}

export { setCookie, getCookie, removeCookie };
