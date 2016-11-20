var should = require('chai').should(),
    hello = require('../index'),
    helloWorld = hello.helloWorld,
    helloYou = hello.helloYou;

describe('#helloWorld', function() {
  it('return a string saying hello world', function() {
    helloWorld().should.equal('hello world');
  });
});

describe('#helloYou', function() {
  it('return a string saying hello dave', function() {
    helloYou('dave').should.equal('hello dave');
  });
});