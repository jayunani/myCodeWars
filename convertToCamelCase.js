// Complete the method/function so that it converts dash/underscore delimited 
// words into camel casing. The first word within the output should be 
// capitalized only if the original word was capitalized.
// Examples:
// returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior")
// returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

var toCamelCase = function(str){
	var split = str.split("");
	for(var i=0; i<split.length; i++){
		if(split[i] === "-" || split[i] === "_"){
			split.splice(i,1);
			split[i] = split[i].toUpperCase();
		}
	}
	return split.join("");
}