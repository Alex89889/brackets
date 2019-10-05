module.exports = function check(str, bracketsConfig) {
 var twoBrackets;
 for (var i = str.length; i >= 0; i--){ 
    for (var j = 0; j < bracketsConfig.length; j++){
	   twoBrackets= bracketsConfig[j][0]+bracketsConfig[j][1];
       str = str.replace(twoBrackets, '');
    }
  }
  return (str.length == 0);
}
