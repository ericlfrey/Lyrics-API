import submitData from './submitData';

const events = () => {
  document.querySelector('#form').addEventListener('submit', submitData);
};

export default events;
