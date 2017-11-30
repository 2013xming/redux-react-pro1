import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';

import SettingBlock from './settingBlock/settingBlock';

import './settings.less';

class Main extends Component {
/*    constructor(props) {
        super(props);
        this.state=Object.assign({},this.state,props);

    }*/

    componentWillMount() {
       
    }
    componentDidMount() {
        
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextState);
    // }
    
    // componentWillUpdate(nextProps,nextState){
    //     console.log(nextState);
    // }
   
    render() {
    	const {clickItem,settings} = this.props;
        const settingData = settings.data;
/*        console.log("settingData:");
        console.log(settingData);*/
        return (
            <div className="setting-container">
                <h5 className='title'>设置</h5>
                
	                {
	                	settings.data.map((item,index)=>{
	                		return <SettingBlock items={item} key={index} clickItem={clickItem} row={index}/>
                		})
	                }            
            </div>
        )
    }
    
}

export default Main;
