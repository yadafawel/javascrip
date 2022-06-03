// alert("Hi  it's yadaf");
//  --1. addition
//  --1. info -- je peux pas déclarer plusieurs variables à la suite 

//  je d"clare mes variable

var nb1, nb2, resultat;

// j'affiche des valeurs
nb1 = 10;
nb2 = 5;

// j'utilise mes variables avec un calcul
resultat = nb1 + nb2;

//  j'affiche mon mon resultat dans la console

console.log(resultat);

// --- 2. Sustraction
// -- Sustraction de nb1 - nb2 avec l'operateur "-"

resultat = nb1 -nb2;
console.log(resultat);


//---3 Multiplication 
// --- Multiplication de nb1*nb2 avec l'operateur "*"  
resultat = nb1 * nb2;
console.log(resultat);

// -- Division
// ---  Division de nb1/nb2 avec l'operateur "/"

resultat = nb1/nb2;
console.log(resultat);


// ---5. modulo 
// --- Modulo retourne  le reste d'une division
// --- modulo de nb1 % nb2 avec l'operateur "%"
 resultat = nb1 % nb2;
 console.log(resultat);


//  -- et  maintenant je ré-afficte une valeur à nb1 
nb1 =11;
resultat = nb1 % nb2;
console.log("le reste de la division de " + nb1 + "par" + nb2 + "est égale à : " + resultat);

// -- 6. Ecriture simplifiées

nb1 = 15;
nb1 = nb1 + 5; //égal à 20

nb1 += 10 //nb1 lui-même + quelque chose 
console.log('le  resultat de "nb1 + =10; " est' + nb1); // égale à 30, alternance de quillemet simple et duble pour ne pas casser ma chaine de caractaire

// le racourci est le même  avec autres operateur +, -, *, / et %

// si j'utilise un ' (apostrophe ) dans un un phrase concaténée, je peut echapé le charactaire à l'aide d'un anti slash\ (alt gr + 8)

// fin
