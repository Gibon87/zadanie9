function drawTree (n) 
{
var star;
var i;
star="*";
for (i=1;i<=n;i++) 
	{
	console.log(star);
	star=star + "*";
	} 
}
drawTree(5);