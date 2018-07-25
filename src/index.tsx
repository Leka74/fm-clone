import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Flex from './flex';
import Grid from './grid';
// import App from './Containers/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Grid />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();