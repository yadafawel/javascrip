// synataxe de base

// commentaire sur une ligne 

/*
ici je fais un commentaire sur la 
plusieur ligne 
*/

// décaler une variable en Js 
// var Prenom;
// var Prenom = "yadaf";

// var nom;
//  var nom = "Awel";
// -- 2: Affecter une valeur à variable 



// --3: Une instruction se termine TJOURs par un poin vergule, aussi il est possible d'écrir plusieurs intuructionsur une seule ligne
// int_1;
// int_2; int_3;

// --4: Affichage une boite de dialogue( 2 façon);
// alert("super tu es arrivé sur mon site ! ");
// windows.alert("super, tu es arrivé sur mon site ! ");

// ---5: Affichage dans la console  (ici, la valeur de ma variable prenom);
// console.log(Prenom);
// console.log(nom)

// --6:Affichage dans la page web
// document.write("A la pause vous aurez des haribos pik !")

// --7: demender à l'utilisateur une valeur (2 façon)
// window.prompt(" Question on est quel jour ? ", "jour de la semaine");
// prompt(" Question on est quel jour ?", "jour de la semaine");


// -- et pour manipuler cette valeur, je n'oublie pas de la stoker 
// var jour = prompt(" Question on est quel jour ? ", "jour de la semaine") 
// console.log(jour)

// --8 Attention /!\ le JS sencible à la  case ('case sensitive')
// mavariable =/= mavariable =/= ma_variable

// une variable ne peut pas commencer âr un chiffre ne doit contenir que des caractaire alphanumairique, et ne peut pas être un mot  réversé (var, for, .. des éléments notifs du langage JS)

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

// --10 Une variable peut être déclarée de façon explicite:
var fruit;
var fruit="fraise";

// ou implicite
var fruit_2 = "coco";
haribo="Yagada";


// /*------------------------*/
// /~~~~~~~~~~~~~~~~~~~~LES TYPES DE VARIABLES~~~~~~~~~~~~~~~~

// 1. chane de caractaires (string)
var vacances = "2022";
var destination = "Oromiya";

// --2. un nombre entier (integeer ou int)
var anene = 2022;

// --3. un nombre décimal (float)
var nombre_a_virgule = -5.32;

// --4. un booleen(boolean = vrai/faux =true/false)
var unBooleen = false; //-- true

// --5 Les constantes

// la déclaration constante permet de crée un constante accecible uniqument en lecture. Contrairement à une variable sa valeur ne peut plus être  modifier par reaffection plus bas dans le code .
// une constante ne peut pas etre déclaré dans le même script.

// --par convention les constantes sont en majouscules
const PAYS = "France"; // string
const AN  ='2022'; //string
const BIRTH = 2022; //nombre

// --6. typeof permet de connaitre le type de ma variable 
console.log(vacances);
console.log(typeof vacances);
console.log(anene);
console.log(typeof anene);

// En JS les variable sont auto-typées
// on peut convertir un variable de type numbers en string  et aussi string en number avec les fontions native de js 
// -- la fontion parsInt ()renvoie un entier à partir d'une châine de caractaire 


var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// --string => NUMBER
unChiffre = persInt(unChiffre);
console.log(typeof unChiffre);

// je reaffiche un valeur
unChiffre = "12.22";
console.log(unChiffre);
console.log(typeof unChiffre);

// string => float
unChiffre= parseFloat(unChiffre);
console.log(typeof unChiffre);

// nomber => string
var nb_en_letters =258;
console.log(nb_en_letters);
console.log(typeof nb_en_letters)

var nb_en_letters = nb_en_letters.toString();
console.log(nb_en_letters);
console.log(typeof nb_en_letters);

// Fin

