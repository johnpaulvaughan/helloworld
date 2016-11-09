/**
 * return a hello world string.
 *
 * @param  null
 * @return {String}
 */
module.exports = {
  helloworld: function() {
    console.log('hello world');
    return String('hello world');
  },

  /**
   * return a hello world string with a custom name instead of 'world'.
   *
   * @param  {String} name
   * @return {String}
   */
  helloyou: function(name) {
    console.log('hello from '+name);
    return String('hello '+name);
  }
};