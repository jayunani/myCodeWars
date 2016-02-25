// Write a function that removes all the even characters from a string and returns them in an array. 
// If the string is smaller than two characters and longer than 100 characters, the function should 
// return "invalid string".

// function evenChars("abcdefghijklm") {}
// should return ["b", "d", "f", "h", "j", "l"]

function evenChars(string) {
  
  var newArray = [];
  var split = string.split("");
  
  if(string.length < 2 || string.length > 100) {
    return ("invalid string")
  } else {
    for(var i = 1; i < split.length; i += 2){
      newArray.push(split[i])
    }
  }

return newArray;

}