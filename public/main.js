import 'bootstrap'; // import bootstrap elements and js
import events from '../components/events';
import formOnDom from '../components/formOnDom';
import '../styles/main.scss';

const startApp = () => {
  formOnDom();
  events();
};

startApp();
