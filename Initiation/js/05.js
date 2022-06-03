// alert("hi");
// structure de base IF

if (true){ // par defaut la condition à vérifier le IF vérifie si elle vraie
    /*..........code......*/

}
var nb1 =10;
if (nb1 < 50){
    console.log("nb1 est bien inferirieur à 50");
}

if(true){
    // code si vraie
}
else{
    // code si faux
}
if (nb1 > 50){
    console.log("nb1 est bien supperieur à 50");
}else{
    console.log("nb1 es bien inferieur à 50");
}


// Exercice
// on utilise le if pour vérifier  l'âge de l'internaute.
// => s'il est majeur je lui souhaite bienvenue
// => si il est minuer je [1] lui signale  et [2] les renvoit ver une site

// je declare la majorité légale
var majoritéFR = 18;

// demender l'âge en s'assuran que nous avons un Nunber
var age = parseInt(prompt("quel est votre age ?"));

//  ---- ke vérifier si mon internaute est majeur


if(age >= majoritéFR){ //bienvenue si vrai
    alert("bienvenue, vous ête majeur");
}else{ //s'il est mineur je lui signale
   alert("Allez voir un autre super site....");
   // et ensuite je redirige vers w3school
   document.location.href = "https://www.w3schools.com/js/js_if_else.asp"
}

//  fin