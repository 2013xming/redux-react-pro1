import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducer from '../Reducer/Index';
import thunk from 'redux-thunk';

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

var store = createStore(
    combineReducers(reducer),
    applyMiddleware(thunk)
);

if (module.hot) {
	// Enable Webpack hot module replacement for reducers
	console.log('hot');
	module.hot.accept('../Reducer', () => {
	  	var nextRootReducer = require('../Reducer/Index');
	  	store.replaceReducer(nextRootReducer);
	});
}

export default store;
