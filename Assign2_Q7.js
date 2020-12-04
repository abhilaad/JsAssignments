// 7. Write a JavaScript program to remove items from a dropdown list.

/* HTML Code
  <html>
  <head>

<title>Remove course which is not offered by SkillSanta from a dropdown list</title>
</head><body><form>
<select id="colorSelect">
<option>Red</option>
<option>Green</option>
<option>White</option>
<option>Black</option>
</select>
<input type="button" onclick="removecolor()" value="Select and Remove">
</form></body>
</html>

*/

function removecolor()
{
var x=document.getElementById("colorSelect");
x.remove(x.selectedIndex);
}