import './style.css';
import javascriptLogo from './javascript.svg';
import { enviromentsComponent } from './src/concepts/01-enviroments';
import { callbacksComponent } from './src/concepts/02-callBacks';
import { promiseComponent } from './src/concepts/03-promises';
import { promiseRaceComponent } from './src/concepts/04-promise-race.js';
import { asyncComponent } from './src/concepts/05-async';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    
    </div>
    
  </div>
`;

const element = document.querySelector('.card');


//enviromentsComponent(element);
//callbacksComponent(element);
// promiseComponent(element);
// promiseRaceComponent(element);
asyncComponent(element);
