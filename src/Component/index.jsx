import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Tool} from '../Config/Tool';
import {Header,template} from './common/mixin';
import SettingBlock from './settingBlock/settingBlock';
import SettingItem from './settingItem/settingItem';
import *as action from '../Redux/Action/Index';

import './index.less';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state=Object.assign({},this.state,props);
        /*this.state = {
            settings:[
	            [
		            {id:'1',title:'锁屏开关',type:'switch',val:'on'},
		            {id:'2',title:'非Wifi网络加载',type:'switch',val:'off'},
	            ],
	            [
		            {id:'3',title:'消息推送设置',type:'switch',val:'on'},
		            
	            ],
	            [
		            {id:'4',title:'消息推送设置',type:'text',val:'22.2K'},   
	            ],
	            [
		            {id:'5',title:'关于',type:'link',val:'http://www.baidu.com'},
		            {id:'6',title:'免责声明',type:'link',val:'http://www.baidu.com'},   
		            {id:'7',title:'更新检查',type:'link',val:'http://www.baidu.com'},      
	            ],
            ]
        }*/
        
    }

    componentWillMount() {
       
    }
    componentDidMount() {
        
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        
    }
    
    componentWillUpdate(nextProps,nextState){
        
    }*/
   
    render() {
    	const {clickItem} = this.props;
        return (
            <div className="setting-container">
                <h5 className='title'>设置</h5>
	                {
	                	this.state.settings.map((item,index)=>{
	                		return <SettingBlock items={item} key={index} clickItem={clickItem} />
                		})
	                }            
            </div>
        )
    }
    
    componentWillUnmount() {
        
    }
}

/*export default template({
    id: 'index',  //应用关联使用的redux
    component: Main,//接收数据的组件入口
    url: ''
});
*/

const mapStateToProps = (state) =>{
    return  {
        settings:[
	            [
		            {id:'1',title:'锁屏开关',type:'switch',val:'on'},
		            {id:'2',title:'非Wifi网络加载',type:'switch',val:'off'},
	            ],
	            [
		            {id:'3',title:'消息推送设置',type:'switch',val:'on'},
		            
	            ],
	            [
		            {id:'4',title:'消息推送设置',type:'text',val:'22.2K'},   
	            ],
	            [
		            {id:'5',title:'关于',type:'link',val:'http://www.baidu.com'},
		            {id:'6',title:'免责声明',type:'link',val:'http://www.baidu.com'},   
		            {id:'7',title:'更新检查',type:'link',val:'http://www.baidu.com'},      
	            ],
            ]
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        clickItem:(...args)=>{dispatch(action.clickItem(3,'off'))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)