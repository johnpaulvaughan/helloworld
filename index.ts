/**
 * return a hello world string.
 *
 * @param  null
 * @return {String}
 */
export function helloWorld() {
  return String('hello world');
}

/**
 * return a hello world string with a custom name instead of 'world'.
 *
 * @param  {String} name
 * @return {String}
 */
export function helloYou(name:string) {
  return String('hello ' + name);
}