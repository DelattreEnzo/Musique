const btnliste = document.getElementById("liste");
const btncontact = document.getElementById("contact");
const disque = document.querySelector(".disque");
const btnplay = document.getElementById("btnplay");
const imgplay = document.querySelector(".play_pause");
const audio = document.getElementById("audio");
const cover = document.querySelector(".cover");
const listmusic = document.querySelector(".listmusic");
const playlist = document.getElementById("playlist");
const btnmoddisk = document.getElementById("moddisk");
let playlistVisible = false;
let data = [];

const config = {
  urlCover: "assets/pictures/",
  urlSound: "assets/music/",
};

const getData = async () => {
  const req = await fetch("./assets/data.json");
  console.log(req);
  const dbmusic = await req.json();
  console.log("result", dbmusic);
  data = dbmusic;

  dbmusic.forEach((musique) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `<li id=${musique.id}><h4>${musique.nom}</h4> <img src="${config.urlCover}${musique.cover}" alt ="${musique.title}" ><div><small>${musique.artiste}</small></div></li>`;
    listmusic.appendChild(liElement);

    liElement.addEventListener("click", () => {
      audio.src = config.urlSound + musique.lien;
      cover.src = config.urlCover + musique.cover;

      if (disque.classList.contains("pause")) {
        audio.pause();
      } else {
        audio.play();
      }
    });
  });
};

getData();

btnplay.addEventListener("click", () => {
  disque.classList.toggle("pause");
  if (disque.classList.contains("pause")) {
    imgplay.src = "assets/pictures/bouton-jouer.png";
    audio.pause();
  } else {
    imgplay.src = "assets/pictures/bouton-pause.png";
    audio.play();
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

btncontact.addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/mickyomiel/";
});

btnmoddisk.addEventListener("click", () => {
  const randommusique = choisirMusiqueAleatoire();
  audio.src = config.urlSound + randommusique.lien;
  cover.src = config.urlCover + randommusique.cover;

  if (disque.classList.contains("pause")) {
    audio.pause();
  } else {
    audio.play();
  }
});

function choisirMusiqueAleatoire() {
  if (data && data.length > 0) {
    const indexAleatoire = Math.floor(Math.random() * data.length);
    const musiqueAleatoire = data[indexAleatoire];
    return musiqueAleatoire;
  } else {
    console.error("Aucune donnée de musique chargée ou la liste est vide.");
    return null;
  }
}
