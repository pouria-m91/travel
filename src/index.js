import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import 'src/css/slick.css';
// import 'src/css/slick-theme.css';
// import 'src/js/slick.min';


// import 'src/css/font.css';
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
