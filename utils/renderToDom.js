const renderToDom = (divId, html) => {
  document.querySelector(divId).innerHTML = html;
};

export default renderToDom;
