import {createStore, combineReducers, applyMiddleware} from 'redux';
//import * as reducer from '../Reducer/index';
import thunk from 'redux-thunk';
import reducer from '../Reducer/index';
import * as settings from '../Reducer/settings';
//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

var store = createStore(
    reducer,
    applyMiddleware(thunk)
);

if (module.hot) {
	// Enable Webpack hot module replacement for reducers
	
	module.hot.accept('../Reducer/', () => {
		console.log('Reducer');
		console.log(reducer);

	  	var nextRootReducer = combineReducers(require('../Reducer/settings'));
	  	console.log(nextRootReducer);
	  	store.replaceReducer(nextRootReducer);
	});
}

export default store;
