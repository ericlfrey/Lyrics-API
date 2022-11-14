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

export default getLyrics;
