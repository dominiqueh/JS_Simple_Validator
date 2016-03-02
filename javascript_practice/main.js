function getInput (){
do{
  var inputPhoneNum = prompt("Please enter your phone number with dashes. \n This site may look sketchy, but I assure you that your number will not be used for SPAM \n- just identity fraud.")
  var isValid = true;
//phone number
  if(alert(inputPhoneNum.charAt(3,7) === '-' && inputPhoneNum.length === 12)){
  else {
    isValid = false;
  }
}

// to start back up incorrect validators
while(!isValid)
