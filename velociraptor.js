var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops' ;
var dinasourUpperCased = dinosaur.toUpperCase();
var textCharsAfter = text.replace('Velociraptor', dinasourUpperCased);
var partOftext = textCharsAfter.slice (0,textCharsAfter.length/2)
console.log(partOftext);