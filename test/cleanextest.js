var assert = require('assert');

var confirm = require('../lib/confirm');

var cleanex = require('../lib/index');


describe("#Testing loading for cleanex ", function() {
  describe("should load utility module and call some utility functions ", function() {
    it("it should return true", function() {

      var cleannum = cleanex.cleanNum();
      console.log(cleannum);
      assert.equal(cleannum, true, 'error if not null');

    });
  });

});
