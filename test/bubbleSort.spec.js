const chai = require('chai')
const expect = chai.expect
const bubbleSort = require('../bubblesort')


describe('bubbleSort', function(){
  it ('exists', function() {
  	expect(bubbleSort).to.be.ok;
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one element', function(){
    expect( bubbleSort([2]) ).toEqual( [2] );
  });

    it('handles an array with two elements', function(){
    expect( bubbleSort([2, 1]) ).toEqual( [1, 2] );
  });

  it('handles an array with multiple elements', function(){
    expect( bubbleSort([2, 9, 4, 5]) ).toEqual( [2, 4, 5, 9] );
  });

  it('works with zero', function(){
  	expect( bubbleSort([1, 4, 0]) ).toEqual( [0, 1, 4])
  })
});

