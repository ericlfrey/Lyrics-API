import renderToDom from '../utils/renderToDom';
import getLyrics from './getLyrics';

const lyricsOnDom = (artist, song) => {
  getLyrics(artist, song).then((response) => {
    const lyricsStr = `
      <div>
        <h2>${artist}</h2>
        <h2>"${song}"</h2>
      </div>
      <div id="responseDiv"></div>
    `;
    renderToDom('#app', lyricsStr);
    if (response.lyrics) {
      renderToDom('#responseDiv', response.lyrics);
    } else {
      renderToDom('#responseDiv', response.error);
    }
  });
};

export default lyricsOnDom;
