// 4. Write a JavaScript program to find the most frequent item of an array.

var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostfre = 1;
var f = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 f++;
                if (mostfre<f)
                {
                  mostfre=f; 
                  item = arr[i];
                }
        }
        f=0;
}
console.log(item+" ( " +mostfre +" times ) ") ;
