/*
This script manages an audio playlist on a webpage.
It initializes the playlist from embedded JSON data, displays track titles,
allows users to click on a track to play it, and automatically plays a new
random track (excluding the current one) when a track ends.
*/

const playlistDataEl = document.getElementById("playlist-data");
const playlist = JSON.parse(playlistDataEl.textContent);

const audio = document.getElementById("audio");
const playlistEl = document.getElementById("playlist");

playlist.forEach((song, idx) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.addEventListener("click", () => loadTrack(idx));
  playlistEl.appendChild(li);
});

let currentTrackIndex = null;

function getRandomTrackIndex(excludeIndex) {
  let index;
  do {
    index = Math.floor(Math.random() * playlist.length);
  } while (index === excludeIndex);
  return index;
}

function loadTrack(index) {
  currentTrackIndex = index;
  audio.src = playlist[index].url;
  audio.play();
  updateSelection(index);
}

function updateSelection(selectedIndex) {
  Array.from(playlistEl.children).forEach((li, idx) => {
    li.classList.toggle("selected", idx === selectedIndex);
  });
}

loadTrack(getRandomTrackIndex(null));

audio.addEventListener("ended", () => {
  const nextIndex = getRandomTrackIndex(currentTrackIndex);
  loadTrack(nextIndex);
});
