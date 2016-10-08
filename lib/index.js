
var Cleanex = (function () {

  var confirm = require('./confirm');
  var cleanObj = {};



    cleanObj.confirm_type = function(type_function,param){
        // all functions was have arg, if not param , print version
        return confirm[type_function](param);
    }

  return cleanObj;
})();

module.exports = Cleanex;
