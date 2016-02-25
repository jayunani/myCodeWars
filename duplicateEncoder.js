// The goal of this exercise is to convert a string to a new string where each character in the new 
// string is '(' if that character appears only once in the original string, or ')' if that character 
// appears more than once in the original string. Ignore capitalization when determining if a 
// character is a duplicate.

// Examples:

// "din" => "((("

// "recede" => "()()()"

var duplicateEncode = function(str){
	str = str.toLowerCase().split("");
  	var myObj = {};
  	var finalString = "";
  	
  	for (var i=0; i<str.length; i++) {
    	if (myObj[str[i]] === undefined) {
      		myObj[str[i]] = 1;
    	} else {
      		myObj[str[i]] += 1;
    	}
  	}
  	
  	for (var i=0; i<str.length; i++) {
    	if(myObj[str[i]] === 1){
      		finalString += "(";
    	} else {
      		finalString += ")";
    	}
  	}
  	
  	return finalString;
}