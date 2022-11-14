import renderToDom from '../utils/renderToDom';

const formOnDom = () => {
  const formStr = `
  <form id="form">
    <input type="text" placeholder="Artist" id="artistInput" required />
    <input type="text" placeholder="Song Title" id="songInput" required />
    <button type="submit" id="submitBtn" class="btn btn-danger">Get Lyrics</button>
  </form>
  `;
  renderToDom('#login-form-container', formStr);
};

export default formOnDom;
