console.log("Hello FDP");

const prenom = "Enzo";
let year = 2023;
const dob = 2003
var yearnul = 2025; //ne plus utiliser
const isAdmin = false;
const boutsdebave= ["Loïc","Tintin","Thomas"]
const sac = {livres:"BD Tintin", trousse:'stylo', skills:["bagarre", "turlute", "Jeux vidéos"]} //objet

console.log(boutsdebave[1]);
console.log(sac.skills);

boutsdebave.forEach(
    boutdebave => {
        console.log(`Bonjour ${boutdebave}`)
    }
);


console.log(`Bonjour ${prenom}`);
calcul_age();

function calcul_age(){
    const age = year - dob;
    if(age<18){
        console.log(`Casse toi con que ti es`)
    }else{
        console.log(`Viens la mon grand`)
    }
}

/*
variante de if 
age < 18 ? console.log(`Casse toi con que ti es`) : console.log(`Viens la mon grand`)
*/

/*fonction nul mais d'aujourd'hui
const calcul_age2 = ()=>{
    const age = year - dob;
    console.log(`Voici ton age: ${age} ans.`)
}

calcul_age2();
*/