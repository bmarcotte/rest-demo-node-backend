var assert = require( 'assert' );

// Dummy test - just checks if assert has loaded.
describe( 'assert', function() {
  describe( 'typeof', function() {
    it( 'should return a type of function', function() {
      assert.equal( typeof assert, 'function' );
    } );
  } );
} );
