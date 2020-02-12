//*ES 5
var maVariable = "What else?"

document.getElementById('monDiv').innerHTML += 'Test '+maVariable;
// le += ajoute la variable au texte; le = remplace le texte.


// ES 6
// document.getElementById('monDiv').innerHTML = `${maVariable} le texte que je veux`;

// pour remplacer toute la page HTML:
document.write(maVariable);

// Fenêtre pop up
alert(maVariable);

// Pr déboguer (aller voir l'onglet console ds l'inspecteur
console.log(maVariable);

//on stocke le contenu
var maVariable = document.getElementById("monDiv");
maVariable.innerHTML = "text";

// utiliser une variable et stocker un nombre
var xy = 15;

// déclarer plusieurs variables sur une seule ligne
var xy = 15, x = 5, u = 95;

// sur plusieurs lignes
var xy = 15;
var x = 5;
var u = 95;


//ajouter 5 à ma variable x : 2 façons de faire
var x = 5;

x = x + 5;
x += 5;

//incrémenter de 1
x++;
++x;
alert(x);

var maVar = "Simon";
var maVar = "Robert";
var maVar = ""; //permet de réinitialiser une variable

// retirer les guillemets pour travailler avec des nombres entiers
var maVar = "5" + 5 + 1; 551
var maVar = 5 + 1 + "5" + 6; 656


var monNombre = 5;
var maVar = 5 + 1 + monNombre + 6 - 3; 14
alert(maVar);

//Afficher les nombres après la virgule;
alert(monNombre.toFixed(2));

//Nan = not a number
alert(NaN === NaN) // NaN n'est pas égal à NaN


