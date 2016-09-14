
var Cleanex = (function () {

  var confirm = require('./confirm');
  var cleanObj = {};



    cleanObj.cleanNum = function(){
        return confirm._num(10);
    }


  return cleanObj;
})();

module.exports = Cleanex;
