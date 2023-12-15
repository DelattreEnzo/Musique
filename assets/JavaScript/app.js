const btnliste = document.getElementById("liste");
const btncontact = document.getElementById("contact");
const disque = document.querySelector(".disque");
const btnplay = document.getElementById("btnplay");
const imgplay = document.querySelector(".play_pause");
const audio = document.getElementById("audio");
const cover = document.querySelector(".cover");
const listmusic = document.querySelector(".listmusic");
const playlist = document.getElementById("playlist");
//const analyzer = new Tone.Analyser("waveform");
//const audioSource = new Tone.MediaElementSource(audio);
let playlistVisible = false;
const musiques = [
  {
    nom: "Micky - La route des étoiles",
    lien: "assets/music/La route des étoiles.mp3",
    cover: "assets/pictures/rde.jfif",
  },
  {
    nom: "Micky - Dantesque",
    lien: "assets/music/Dantesque.mp3",
    cover: "assets/pictures/rde.jfif",
  },
  {
    nom: "Micky - Lvl up",
    lien: "assets/music/Lvl up.mp3",
    cover: "assets/pictures/rde.jfif",
  },
  {
    nom: "Micky - Debranlax",
    lien: "assets/music/Debranlax.mp3",
    cover: "assets/pictures/rde.jfif",
  },
  {
    nom: "Micky - Face à moi même",
    lien: "assets/music/Face à moi même.mp3",
    cover: "assets/pictures/rde.jfif",
  },
  {
    nom: "Micky - Moonlight",
    lien: "assets/music/Moonlight.mp3",
    cover: "assets/pictures/rde.jfif",
  },
  {
    nom: "Micky - Supernova",
    lien: "assets/music/Supernova.mp3",
    cover: "assets/pictures/rde.jfif",
  },
  {
    nom: "Micky - APOCALYPSE (feat. Red B)",
    lien: "assets/music/APOCALYSPE (feat. Red B).mp3",
    cover: "assets/pictures/rde.jfif",
  },
  {
    nom: "Angèle - Saiyan",
    lien: "assets/music/Angèle - Saiyan [IA] (prod. Lnkhey).mp3",
    cover: "assets/pictures/Angèle - Saiyan.jpg",
  },
  {
    nom: "Boblennon - La chanson du Pyro-Barbare !",
    lien: "assets/music/La chanson du Pyro-Barbare ! par Bob Lennon [FantaBobGames].mp3",
    cover: "assets/pictures/Boblennon - La chanson du Pyro-Barbare.jpg",
  },
  {
    nom: "Tonus - La Bite à Dudule",
    lien: "assets/music/La Bite a Dudule.mp3",
    cover: "assets/pictures/Tonus - La Bite à Dudule.jpg",
  },
];

musiques.forEach((musique) => {
  const liElement = document.createElement("li");
  liElement.textContent = musique.nom;
  liElement.addEventListener("click", () => {
    audio.src = musique.lien;
    cover.src = musique.cover;
  });
  listmusic.appendChild(liElement);
});

//audioSource.connect(analyzer);

btnplay.addEventListener("click", () => {
  disque.classList.toggle("pause");
  if (disque.classList.contains("pause")) {
    imgplay.src = "assets/pictures/bouton-jouer.png";
    audio.pause();
  } else {
    imgplay.src = "assets/pictures/bouton-pause.png";
    audio.play();
    /*analyzer.on("change", (bpm) => {
      console.log("BPM:", bpm);
    });
    Tone.Transport.start();*/
  }
});

btnliste.addEventListener("click", () => {
  if (playlistVisible) {
    playlist.style.display = "none";
  } else {
    playlist.style.display = "block";
  }
  playlistVisible = !playlistVisible;
});

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
