// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") --> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") --> "C-Ww-Aaa-Tttt"

function accum(string) {
   
   var finalString = "";
    
    for(var i = 0; i < string.length; i++){
      var countLetter = string[i].toUpperCase();
        
      while(countLetter.length < i+1) {
        countLetter += string[i].toLowerCase();
      }
      
      finalString += countLetter;
      if(i < string.length-1){
        finalString += "-";}
    }
  return finalString;
}