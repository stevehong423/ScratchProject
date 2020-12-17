import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers.js'

const store = createStore(reducers, applyMiddlware(thunk));

export default store;