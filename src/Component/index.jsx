import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Tool} from '../Config/Tool';
import {Header,template} from './common/mixin';
import SettingBlock from './settingBlock/settingBlock';
import './index.less';
class Main extends Component {
    constructor() {
        super();
        this.state = {
            settings:[
	            [
		            {title:'锁屏开关',type:'switch',defaultVal:false},
		            {title:'非Wifi网络加载',type:'switch',defaultVal:false},
	            ],
	            [
		            {title:'消息推送设置',type:'switch',defaultVal:false},
		            
	            ],
	            [
		            {title:'消息推送设置',type:'text',defaultVal:'0K'},   
	            ],
	            [
		            {title:'关于',type:'link',defaultVal:'http://www.baidu.com'},
		            {title:'免责声明',type:'link',defaultVal:'http://www.baidu.com'},   
		            {title:'更新检查',type:'link',defaultVal:'http://www.baidu.com'},      
	            ],
            ]
        }
        
    }

    componentWillMount() {
       
    }
    componentDidMount() {
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        
    }
    
    componentWillUpdate(nextProps,nextState){
        
    }
   
    render() {
        console.log(SettingBlock);
        return (
            <div className="component_container">
                <h5 className='title'>设置</h5>
              	<SettingBlock />
            
            </div>
        )
    }
    
    componentWillUnmount() {
        
    }
}

export default template({
    id: 'index',  //应用关联使用的redux
    component: Main,//接收数据的组件入口
    url: ''
});