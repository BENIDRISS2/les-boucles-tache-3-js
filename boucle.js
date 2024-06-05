/**
 * Exercice 1 :

Écrire un programme qui permet à un utilisateur de voir quelques types de boucles, avec un champ où écrire un type de boucle et de voir la définition et l’utilisation de cette boucle.

Exercice 2:

Objectif: Manipuler les boucles for et do..while.

Énoncé:  Écrire un script qui permet d'afficher la table de multiplication d'un nombre entier n: La valeur de n sera demandée à l’utilisateur via une boîte de dialogue. En cas de saisie d'un nombre non entier le script redemande l'utilisateur de saisir une nouvelle valeur. L'affichage de résultat doit être encadré par un tableau html. Utiliser les boucles imbriquées pour afficher l'ensemble des tables de multiplication pour n=1,2.....10.
 */
let boucle =prompt('choisissez l\'un des boucles :for, Do while , ')
switch (boucle){
    case"for":{
        alert('Une boucle for répète des instructions jusqu\'à ce qu\'une condition donnée ne soit plus vérifiée. La boucle for JavaScript ressemble beaucoup à celle utilisée en C ou en Java. ')

       
        break;
    }
    case"Do while":{
        alert('L\'instruction do...while permet de répéter un ensemble d\'instructions jusqu\'à ce qu\'une condition donnée ne soit plus vérifiée. (NdT : littéralement « do...while » signifie « faire... tant que »). Une instruction do...while\
        Dans l\'exemple qui suit, la boucle do est exécutée au moins une fois et répétée jusqu\'à ce que i ne soit plus inférieur à 5.\
\
let i = 0;\
do {\
  i += 1;\
  console.log(i);\
} while (i < 5);\
')
        break;
    }
    default:{
        alert('veuillez choisir un boucle')
    }
};
// *******************************************************
/*Écrire un script qui permet d'afficher la table de multiplication d'un nombre entier n: La valeur de n sera demandée à l’utilisateur via une boîte de dialogue. En cas de saisie d'un nombre non entier le script redemande l'utilisateur de saisir une nouvelle valeur. L'affichage de résultat doit être encadré par un tableau html. Utiliser les boucles imbriquées pour afficher l'ensemble des tables de multiplication pour n=1,2.....10. */
// let n=prompt('saisissez un nombre entier')
// if (typeof(n)=='number'){
//    alert('c\'comme ca');
 
// }
// else{
//     alert('c\'pas ca')
// }

let n=prompt('saisissez un nombre entier');
n=parseInt(n,10);
if(!isNaN(n)){
    // alert('C\'est comme ca');
    // for(let i=1;i=10;i++){
        let resultat =''; 
        for(let a=1;a<=10;a++){
            resultat +=`${n}x${a}=${n*a}<br>`;
        }
       

        // alert ('votre table de multiplication est '+resultat);
        document.getElementById('aff').innerHTML=resultat;
        console.log(resultat)
    // }
}
else{
    alert('veuillez saisir un entier')
}

// let n = prompt('Saisissez un nombre entier');
// n = parseInt(n, 10);
// if (!isNaN(n)) {
//     let resultat = '';
//     for (let i = 1; i <= 10; i++) {
//         resultat += `${n} x ${i} = ${n * i}<br>`;
//     }
//     document.getElementById('aff').innerHTML = resultat;
//     console.log(resultat);
// } else {
//     alert('Veuillez saisir un entier');
// }
