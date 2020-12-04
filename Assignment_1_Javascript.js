
// Assignment 1 (Javascript) 
// 1. Write a JavaScript conditional statement to sort three numbers. Display an
// alert box to show the result.
const x= 0;
const y=-1;
const z= 4;
console.log("Sorting in Descending Order");
if (x>y && x>z)
{
        if (y>z)
        {
            alert(x + ", " + y + ", " +z);
        }
        else
        {
            alert(x + ", " + z + ", " +y);
        }
}
else if (y>x && y>z)
{
        if (x>z)
        {
             alert(y + ", " + x + ", " +z);
        }
        else
        {
             alert(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            alert(z + ", " + x + ", " +y);
        }
        else
        {
            alert(z + ", " + y + ", " +x);
        }
    }

// 2.Write a JavaScript for a loop that will iterate from n times. For each
// iteration, it will check if the current number is odd, even or prime, and
// display a message on the screen    

for (let x=0; x<=15; x++) {
    function isPrime(x) {
        for (let i = 2; i < x; i++) { 
          if(x % i === 0) return false; 
        }
        return x > 2; 
      } 

    if (x === 0) {
            console.log(x +  " is even");
    }
     if (x % 2 === 0 && x > 2) {
            console.log(x + " is even");   
    }
   if (x === 2) {
      
           console.log(x + " is even and prime");   
     }

    if(x % 2 !== 0 && isPrime(x) == true ) {
            console.log(x + " is odd and prime");
    }
    if(x % 2 !== 0 && isPrime(x) == false ) {  
     	  console.log(x + " is odd")
                 
    }
}

/* 3.Write a JavaScript program to construct the following pattern, using a
nested for loop.
* * * * *
* * * *
* * *
* *
*           */

let x,y;
let chr = "";
for(x=1; x <=6; x++)
{
   for (y=6; y > x; y--)
     {
    chr=chr + ("*");        
      }
 console.log(chr);
 chr='';    
}

// 4.Write a JavaScript function to hide email addresses to protect from
// unauthorized user
 
email = function (user_email) {
    let mid, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    mid = part1.length / 2;
    part1 = part1.substring(0, (part1.length - mid));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(email("eddygrant@example.com"));

// 5.Write a JavaScript function to capitalize the first letter of each word in a
// string

let x,i;
const co = function capCase(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(co("hi from skillsanta"));

// 6.Write a JavaScript function to truncate a string to a certain number of
// words.

const yo = function truncate(str, n) {
    return str.split(" ").splice(0,n).join(" ");
}

console.log(yo('The quick brown fox jumps over the lazy dog', 4));

// 7.Write a JavaScript function to find a word within a string.

let i,j;
const yo = function search_word(text, word){
    
    let x = 0, y=0;
   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
}

console.log(yo('The quick brown fox', 'fox'));
console.log(yo('aa, bb, cc, dd, aa', 'aa'));

// 8.Write a javascript function to print the Fibonacci series of n times.

const fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    let s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));

 // 9.The Temperature Converter
// Create a function called Celsius to Fahrenheit & vice versa

function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(36);
fToC(98.6);

// 10.Write a JavaScript function that takes a string which has lower and upper
// case letters as a parameter and converts upper case letters to lower case,
// and lower case letters to upper case.
let str = 'Hi';
let res = '';
for (let i = 0; i < str.length; ++i) {
    c = str[i];
  if (c == c.toUpperCase()) {
    res += c.toLowerCase();
  } else if (c == c.toLowerCase()) {
    res += c.toUpperCase();
  } else {
    res += c;
  }
}
console.log(res);
  