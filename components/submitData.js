import lyricsOnDom from './lyricsOnDom';

const submitData = (e) => {
  e.preventDefault();
  const form = document.querySelector('#form');
  const artistInput = document.querySelector('#artistInput');
  const songInput = document.querySelector('#songInput');
  const artist = artistInput.value;
  const song = songInput.value;
  lyricsOnDom(artist, song);
  form.reset();
};

export default submitData;
