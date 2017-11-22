import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './Router/Route.jsx'; //路由配置
import store from './Redux/Store/Store.jsx';
import './Config/Config.js';//引入默认配置
import './utils/utils';
import { AppContainer } from 'react-hot-loader';


store.subscribe(() => { //监听state变化
    console.log(store.getState())
});


render(
    <Provider store={store}>
    	<AppContainer>
        	{route}
        </AppContainer>
    </Provider>,
    document.getElementById('root')
);
if(module.hot){
	module.hot.accept();
}

