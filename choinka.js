var n;
var star;
var i;
function drawTree (n) 
{
star="*";	
for (i=1;i<=n;i++) 
	{
	console.log(star);
	star=star + "*";
	document.write("<br>");
	} 
}
console.log(drawTree(5));