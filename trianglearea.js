var triangle1Area; 
var triangle2Area; 
var triangle3Area; 

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0 ) {
		return 'nieprawidlowe dane';
	} else {
		return a*h/2;
	}
}
triangle1Area = getTriangleArea(10, 15);
triangle2Area = getTriangleArea(8, 12);
triangle3Area = getTriangleArea(7, 16);

console.log( getTriangleArea(10,6) )

