// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const getLyrics = (artist, song) => new Promise((resolve, reject) => {
  fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const lyricsOnDom = (artist, song) => {
  getLyrics(artist, song).then((response) => {
    console.warn(response);
    document.querySelector('#app').innerHTML = response.lyrics;
  });
};

const startApp = () => {
  lyricsOnDom('prince', 'purple rain');
};

startApp();
