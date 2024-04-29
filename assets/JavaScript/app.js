const btnliste = document.getElementById("liste");
const btncontact = document.getElementById("contact");
const disque = document.querySelector(".disque");
const bras = document.querySelector(".bras");
const btnplay = document.getElementById("btnplay");
const imgplay = document.querySelector(".play_pause");
const audio = document.getElementById("audio");
const cover = document.querySelector(".cover");
const listmusic = document.querySelector(".listmusic");
const playlist = document.getElementById("playlist");
//bug mais a utiliser pour capturer le bpm de la musique
//const analyzer = new Tone.Analyser("waveform");
//const audioSource = new Tone.MediaElementSource(audio);
let playlistVisible = false;

//pour chaque musique dans musiques creer un li clickable qui change l'audio et la cover selon ce dans le li

function handleAnimationEnd() {
  bras.style.animationPlayState = "paused";
}

const config = {
  urlCover: "assets/pictures/",
  urlSound: "assets/music/",
};

const getData = async () => {
  const req = await fetch("./assets/data.json");
  console.log(req);
  const dbmusic = await req.json();
  console.log("result", dbmusic);

  dbmusic.forEach((musique) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `<li id=${musique.id}><h2>${musique.nom}</h2> <img src="${config.urlCover}${musique.cover}" alt ="${musique.title}" ><div><small>${musique.artiste}</small></div></li>`;
    playlist.appendChild(liElement);

    liElement.addEventListener("click", () => {
      audio.src = config.urlSound + musique.lien;
      cover.src = config.urlCover + musique.cover;
      audio.play();
    });
  });
};

getData();

//utilisé avant pour crée liste
/*dbmusic.forEach((musique) => {
  const liElement = document.createElement("li");
  liElement.textContent = musique.nom;
  
  listmusic.appendChild(liElement);
});*/

//bug mais a utiliser pour capturer le bpm de la musique
//audioSource.connect(analyzer);

btnplay.addEventListener("click", () => {
  disque.classList.toggle("pause");
  bras.style.animation = "none"; // Réinitialisation de l'animation
  bras.offsetHeight; // Déclenche une reflow pour réinitialiser l'animation
  bras.style.animation = "lecture 1s";
  if (disque.classList.contains("pause")) {
    imgplay.src = "assets/pictures/bouton-jouer.png";
    audio.pause();

    bras.style.animationDirection = "reverse";
    bras.addEventListener("animationend", handleAnimationEnd);
  } else {
    imgplay.src = "assets/pictures/bouton-pause.png";
    audio.play();
    bras.style.animationDirection = "normal";

    //bug mais a utiliser pour capturer le bpm de la musique
    /*analyzer.on("change", (bpm) => {
      console.log("BPM:", bpm);
    });
    Tone.Transport.start();*/
  }
});

//fais apparaitre le li playlist et disparaittre
btnliste.addEventListener("click", () => {
  if (playlistVisible) {
    playlist.style.display = "none";
  } else {
    playlist.style.display = "block";
  }
  playlistVisible = !playlistVisible;
});
