

var Cleanex = (function() {
   "use strict";


    /*
          JavaScript primitive data types
    String	represents sequence of characters e.g. "hello"
    Number	represents numeric values e.g. 100
    Boolean	represents boolean value either false or true
    Undefined	represents undefined value
    Null	represents null i.e. no value at all
    */

    return {
       // for initial testing purposes, get version of module
      version  : function() {
        return '1.0.0';
      },

      _string : function(arg) {
            return typeof arg == "string";
        },

      _num : function(arg) {
   /*
      using just typeof NaN passes as a number

   */
         return isNaN(arg)? false : typeof arg == "number";

      },


      _bool : function(arg) {
         /*
          Only passes for true and false values
          Cannot use one(1) or zero(0) as bool as other languages
          All other test are uneccessary http://stackoverflow.com/questions/28814585/how-to-check-if-type-is-boolean

          */
            return typeof arg == "boolean";
        },

      _undef : function(arg){
        /*
          Comments regarding this

          http://stackoverflow.com/questions/3390396/how-to-check-for-undefined-in-javascript
        */

          return typeof arg == "undefined";
      },


      _null : function(arg){
            /* not conceise enough, no need for double testing
            //http://stackoverflow.com/questions/2647867/how-to-determine-if-variable-is-undefined-or-null
              NB: No need to use tyepof, this is left to standardize the API functions
            if (variable == null){
                // your code here.
                  }
            */
          return typeof arg == "null" || typeof arg == "undefined";
      },

     /**
      Extra functions adopted from

      http://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer

      for floats and ints

     */
       _float: function(arg) {
          return arg === +arg && arg !== (arg|0);
        },


         _int : function(arg) {
          return arg === +arg && arg === (arg|0);
      },

      /*
      JavaScript non-primitive data types

      The non-primitive data types are as follows:

      Data Type	Description
      Object	represents instance through which we can access members
      Array	represents group of similar values
      RegExp	represents regular expression
      We will have great discussion on each data type later.

      */

      _object : function(arg){
        /**
          http://stackoverflow.com/questions/38045218/how-can-i-detect-es5-object-types-in-javascript?noredirect=1&lq=1
          this soulution does not satisfy finction objects as per the link above,
          test for it later to ensure that is fixed
        */

              // found at the following address http://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
          var getType = {};

           var response = typeof arg =='function'?  (arg && getType.toString.call(arg) === '[object Function]') : (arg !== null && typeof arg === 'object');

           return response;


      },

      _array : function(arg){
            // using stack again for confirmation of this standard
            //http://stackoverflow.com/questions/4775722/check-if-object-is-array
            return Object.prototype.toString.call( arg ) === '[object Array]'
      },

      _regexp : function(){

      },

      //------------------------------------------utility functions -------------------------------------------------------------------
        //check if is function





    }// end of return
}());


module.exports = Cleanex;
