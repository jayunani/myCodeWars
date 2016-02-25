// Write a function that takes a single string (word) as argument. The function must return an 
// ordered list containing the indexes of all capital letters in the string.
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
    
    var newArray = [];
    var newWord = word.split("");
      
      newWord.forEach(function(x){  
        if(x === x.toUpperCase()){
          newArray.push(newWord.indexOf(x))
        }
      })
      
  return newArray;
};