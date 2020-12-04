// 5. Write a JavaScript function to get the least common multiple (LCM) of
// two numbers

function lcm(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
   return false;
 return (!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y));
}

function gcd(x, y) {
 x = Math.abs(x);
 y = Math.abs(y);
 while(y) {
   let t = y;
   y = x % y;
   x = t;
 }
 return x;
}
console.log(lcm(3,15));
console.log(lcm(10,15));