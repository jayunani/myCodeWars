// Write a function that checks whether all elements in an array are square numbers. The function 
// should be able to take any number of array elements.
// Your function should return true if all elements in the array are square numbers and false if not.
// An empty array should return undefined. You can assume that all array elements will be positive 
// integers.

// isSquare([1, 4, 9, 16]);
// returns true

// isSquare([3, 4, 7, 9]);
// returns false

// isSquare([]);
// returns undefined

var isSquare = function(array){
	
	var newNum;
  	var counter = 0;
  	
  	if (array.length === 0) {
    	return undefined;
  	} else {
  		for( var i = 0; i < array.length; i++ ){
    		if (Math.floor(Math.sqrt(array[i])) === Math.sqrt(array[i])) {
     			counter ++;
    		}
    		if (counter === array.length){
    			return true;
      		} 
    	}
  	}
  
  	return false;
}