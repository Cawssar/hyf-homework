let dogYearOfBirth = "2000";
let dogYearFuture = "2010";
let humanYear = dogYearFuture - dogYearOfBirth;
let dogYear = 7 * humanYear;
let shouldShowResultInDogYears ="";
let redundant_choice = true;

console.log("Goodboy-Oldboy" + "\n")
if( redundant_choice ){
console.log("Your dog will be " + humanYear + " old in " + dogYearFuture + "\n");
}else{
console.log("Your dog will be " + dogYear + " old in " + dogYearFuture + "\n");
}