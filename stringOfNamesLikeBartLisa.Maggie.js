// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''

function list(names){
  
	var finalNames = "";
  
  	if(names.length < 1){
    	return finalNames;
  	} else if(names.length === 1) {
    	return names[0].name;
  	}
  	
  	for(var i = 0; i < names.length - 2; i++){
    	finalNames += names[i].name + ", ";
  	}
  	
  	for(var i = names.length-2; i < names.length-1; i++){
    	finalNames += names[i].name + " & ";
  	}
  	
  	return finalNames + names[names.length-1].name;
}