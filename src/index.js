import ReactDOM from 'react-dom';
import App from './App';

const pageBody = document.querySelector('.root');
const pageTop = App();

ReactDOM.render(pageTop, pageBody);
