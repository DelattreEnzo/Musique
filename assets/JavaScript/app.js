const btnliste = document.getElementById("liste");
const btncontact = document.getElementById("contact");
const disque = document.querySelector(".disque");
const btnplay = document.getElementById("btnplay");
const audio = document.getElementById("audio");
const playlist = document.querySelector(".playlist ul");
const musiques = [
  {
    nom: "Micky - La route des étoiles",
    lien: "assets/music/La route des étoiles.mp3",
  },
  {
    nom: "Micky - Dantesque",
    lien: "assets/music/Dantesque.mp3",
  },
  {
    nom: "Micky - Lvl up",
    lien: "assets/music/Lvl up.mp3",
  },
  {
    nom: "Micky - Debranlax",
    lien: "assets/music/Debranlax.mp3",
  },
  {
    nom: "Micky - Face à moi même",
    lien: "assets/music/Face à moi même.mp3",
  },
  {
    nom: "Micky - Moonlight",
    lien: "assets/music/Moonlight.mp3",
  },
  {
    nom: "Micky - Supernova",
    lien: "assets/music/Supernova.mp3",
  },
  {
    nom: "Micky - APOCALYPSE (feat. Red B)",
    lien: "assets/music/APOCALYSPE (feat. Red B).mp3",
  },
  {
    nom: "Angèle - Saiyan",
    lien: "assets/music/Angèle - Saiyan [IA] (prod. Lnkhey).mp3",
  },
  {
    nom: "Boblennon - La chanson du Pyro-Barbare !",
    lien: "assets/music/La chanson du Pyro-Barbare ! par Bob Lennon [FantaBobGames].mp3",
  },
  {
    nom: "Tonus - La Bite a Dudule",
    lien: "assets/music/La Bite a Dudule.mp3",
  },
];

btnplay.addEventListener("click", () => {
  disque.classList.toggle("pause");

  if (disque.classList.contains("pause")) {
    btnplay.textContent = "Play";
    audio.pause();
  } else {
    btnplay.textContent = "Pause";
    audio.play();
  }
});

playlist.btnliste.addEventListener("click", () => {});

/*
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
