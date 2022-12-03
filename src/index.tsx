/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';

import './app/style/normalize.css';
import './app/style/global.css';

render(() => <App />, document.getElementById('root') as HTMLElement);
