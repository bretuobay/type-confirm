

var assert = require('assert');

var cleanex = require('../lib/index');

describe('Cleanex primitive datat types', function() {

  describe('#CleanexModule',function(){

    describe('#Initial test for version',function(){
      it('should print infor about module', function(){
        var version = cleanex.version();
        console.log(version);
        assert.equal(version, '1.0.0', 'is the current version');
      });
    });

    describe('#TestForNull',function(){
      it('should assert variable as null and return true', function(){
          //if notheing is passed is null
          var nullvar = cleanex._null();
          console.log(nullvar);
          assert.equal(nullvar, true, 'error if not null');
      });
    });


  describe('#TestForUndefined',function(){
    it('should assert variable is undefined and return true',function(){
       var undefinedvar = cleanex._undef();
       console.log(undefinedvar);
       assert.equal(undefinedvar,true,'error if not undefined')
    });
  });

  describe('#TestForBoolean',function(){
    it('should assert variable is boolean and return true',function(){
       var booleanvar = cleanex._bool(true);
       console.log(booleanvar);
       assert.equal(booleanvar,true,'error if not boolean');
       var booleanvar = cleanex._bool(false);
        console.log(booleanvar);
       assert.equal(booleanvar,true,'error if not boolean')
    });
  });


  describe('#TestForNumber',function(){
    it('should assert variable is number and return true',function(){
      var testvar = 100;
       var numbervar = cleanex._num(testvar);
       console.log(numbervar);
       assert.equal(numbervar,true,'error if : '+ testvar+' not number')
    });
  });

  describe('#TestForString',function(){
    it('should assert variable is string and return true',function(){
      var testvar = ''; // passes empty string '' also passes
       var stringvar = cleanex._string(testvar);
       console.log(stringvar);
       assert.equal(stringvar,true,'error if : '+ testvar+' not string')

       var testvar = '100'; // passes empty string '' also passes
        var stringvar = cleanex._string(testvar);
        console.log(stringvar);
        assert.equal(stringvar,true,'error if : '+ testvar+' not string');

        var testvar = 'This is a string duh!'; // passes empty string '' also passes
         var stringvar = cleanex._string(testvar);
         console.log(stringvar);
         assert.equal(stringvar,true,'error if : '+ testvar+' not string')
    });
  });

  describe('#TestForInteger',function(){
    it('should assert variable is integer and return true',function(){
      var testvar = 100;
       var numbervar = cleanex._int(testvar);
       console.log(numbervar);
       assert.equal(numbervar,true,'error if : '+ testvar +' not an integer');
       var testvar = -+100-9902;
        var numbervar = cleanex._int(testvar);
        console.log(numbervar);
        assert.equal(numbervar,true,'error if : '+ testvar +' not an integer')
    });
  });

  describe('#TestForFloat',function(){
    it('should assert variable is float and return true',function(){
      var testvar = 100.9;
       var numbervar = cleanex._float(testvar);
       console.log(numbervar);
       assert.equal(numbervar,true,'error if : '+ testvar +' not an float');
       var testvar = +100-9434.29; // can evaluate any expression ans test if it passes
        var numbervar = cleanex._float(testvar);
        console.log(numbervar);
        assert.equal(numbervar,true,'error if : '+ testvar +' not an float')
    });
  });
}); // Module core


console.log('--------------------Non primitive-------------------');

describe('Non primitive Datatypes',function(){

  describe('#Object',function(){

      it('should assert that datatype is and object and return true',function(){

        var testvar = {}; // {} passes empty string '' also passes
         var objectvar = cleanex._object(testvar);
         console.log(objectvar);
         assert.equal(objectvar,true,'error if : '+ testvar+' not an object');

         var testvar = new Object(); // passes empty string '' also passes
          var objectvar = cleanex._object(testvar);
          console.log(objectvar);
          assert.equal(objectvar,true,'error if : '+ testvar+' not an object');

          var testvar = {data:{}, success: true, code:200}; // passes empty string '' also passes
           var objectvar = cleanex._object(testvar);
           console.log(objectvar);
           assert.equal(objectvar,true,'error if : '+ testvar+' not an object');

            // allows for the testing of function objects
           var testvar = function(){ return true; } // passes empty string '' also passes
            var objectvar = cleanex._object(testvar);
            console.log(objectvar);
            assert.equal(objectvar,true,'error if : '+ testvar+' not an object')


    });
  });

  //lets test array


  describe('#Array',function(){

      it('should assert that datatype is an array and return true',function(){
        var testvar = []; // {} passes empty string '' also passes
         var arrayvar = cleanex._array(testvar);
         console.log(arrayvar);
         assert.equal(arrayvar,true,'error if : '+ testvar+' not an array');

         var testvar = new Array(); // passes empty string '' also passes
          var arrayvar = cleanex._array(testvar);
          console.log(arrayvar);
          assert.equal(arrayvar,true,'error if : '+ testvar+' not an array');

          var testvar = ['string100', true, 200]; // mixed array
           var arrayvar = cleanex._array(testvar);
           console.log(arrayvar);
           assert.equal(arrayvar,true,'error if : '+ testvar+' not an array ')

    });
  });




});// end non primitives


});
