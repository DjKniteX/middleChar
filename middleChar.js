//Apparently, there is a method that is much better to use than a for loop I thought of earlier.


//To return middle character of a string


function middleChar(string) {
  // using substr() because it takes two parameters to start from the extraction of the length and return the number of letters.
  let midChar;
  
  if (string.length % 2 == 0){
    // if to check if number is even
    //  middle is defined to extract parts of a string from start to length
    // this will return 2 digits for even numbers
    midChar = string.substr((string.length / 2) - 1, 2);
 	return midChar;
  }
  
  if (string.length % 2 == 1 ){
    //if to check if the number is odd
    //this is set to where it will return 1 digit
    middle = string.substr(string.length / 2, 1);
    return midChar;
  }
  
}
