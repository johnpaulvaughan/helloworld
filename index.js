"use strict";
/**
 * return a hello world string.
 *
 * @param  null
 * @return {String}
 */
function helloWorld() {
    return String('hello world');
}
exports.helloWorld = helloWorld;
/**
 * return a hello world string with a custom name instead of 'world'.
 *
 * @param  {String} name
 * @return {String}
 */
function helloYou(name) {
    return String('hello ' + name);
}
exports.helloYou = helloYou;
//# sourceMappingURL=index.js.map