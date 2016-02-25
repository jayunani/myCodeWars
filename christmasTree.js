var christmasTree = function(num){
	var empty = "";
	var counter = 2;
	var starCounter = 1;
	var tempStarCounter = starCounter;
	var numTemp = num;
	var anotherCounter = (((num*2) - counter)/2);
	for(var i = numTemp; i > 0; i--){
		while(anotherCounter > 0){
			empty += " ";
			anotherCounter --;
		}
		
		while(tempStarCounter > 0){
			empty += "*";
			tempStarCounter --;
		}

		starCounter++;
		empty += "\n";

	}
	numTemp --;
	return empty;
}

// var christmasTree = function(num){
// 	var empty = "";
// 	var counter = 2;
// 	var starCounter = 1;
// 	var tempStarCounter = starCounter;
// 	var numTemp = num;
// 	var anotherCounter = 
// 	for(var i=numTemp; i>0; i--){
// 		while((((num*2) - counter)/2) > 0){
// 			empty += " ";
// 			counter += 2;
// 		}
		
// 		while(tempStarCounter > 0){
// 			empty += "*";
// 			tempStarCounter --;
// 		}
// 		starCounter++;
// 		empty += "\n";
// 	}
// 	numTemp --;
// 	return empty;
// }