var should = require('chai').should(),
    hello = require('../index'),
    helloworld = hello.helloworld,
    helloyou = hello.helloyou;

describe('#helloworld', function() {
  it('return a string saying hello world', function() {
    helloworld().should.equal('hello world');
  });
});

describe('#helloyou', function() {
  it('return a string saying hello dave', function() {
    helloyou('dave').should.equal('hello dave');
  });
});