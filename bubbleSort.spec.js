const expect = require('chai').expect
const sinon = require('sinon')
const bubbleSort = require('../bubbleSort')


describe('bubbleSort', function() {
  it ('exists', function() {
  	expect(bubbleSort).to.be.ok;
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).to.eql( [] );
  });

  it('handles an array with one element', function(){
    expect( bubbleSort([2]) ).to.eql( [2] );
  });

    it('handles an array with two elements', function(){
    expect( bubbleSort([2, 1]) ).to.eql( [1, 2] );
  });

  it('handles an array with multiple elements', function(){
    expect( bubbleSort([2, 9, 4, 5]) ).to.eql( [2, 4, 5, 9] );
  });

  it('works with zero', function(){
  	expect( bubbleSort([1, 4, 0]) ).to.eql( [0, 1, 4]);
  });

  it('is efficient', function(){
    const spy = sinon.spy();
    bubbleSort([1, 2, 3, 4, 5], spy);
    expect(spy.callCount).to.equal(4);
  });
});
