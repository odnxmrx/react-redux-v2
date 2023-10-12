//archivo store.js
import { createStore, applyMiddleware } from 'redux'; //middleware, ayuda a peticiones async
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; //para poder hacer peticiones asincronas
import reducer from './reducer';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)) //necesario para hacer peticiones async
    );

//dejamos a disposicion
export default store;
//para envolver la app, en componente que brinda la libreria react-redux