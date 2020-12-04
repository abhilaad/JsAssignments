
/* 1.Credit Card Validation
You're starting your own credit card business. You need to come up
with a new way to validate credit cards with a simple function called
validateCreditCard that returns true or false.
Here are the rules for a valid number:
● The number must be 16 digits, all of them must be numbers
● You must have at least two different digits represented (all of
the digits cannot be the same)
● The final digit must be even
● The sum of all the digits must be greater than 16
*/

function validateCreditCard(creditCardNum){

    
    if(creditCardNum.length !== 16){
      return false;
    }

    for(var i = 0; i < creditCardNum.length; i++){
      
      var currentNumber = creditCardNum[i];
  
      currentNumber = Number.parseInt(currentNumber);
  
      
      if(!Number.isInteger(currentNumber)){
        return false;
      }
    }
  
    // Checking if all digits are not same
    var obj = {};
    for(var i = 0; i < creditCardNum.length; i++){
      obj[creditCardNum[i]] = true;
    }
    if(Object.keys(obj).length < 2){
      return false;
    }
  
  
    if(creditCardNum[creditCardNum.length - 1] % 2 !== 0){
      return false;
    }
  
    var sum = 0;
    for(var i = 0; i < creditCardNum.length; i++){
      sum += Number(creditCardNum[i]);
    }
    if(sum <= 16){
      return false;
    }
  
    return true;
  };
  console.log(validateCreditCard('1211111111111112')); 