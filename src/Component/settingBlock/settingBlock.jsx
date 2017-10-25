import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Tool} from '../../Config/Tool';
import template from '../common/template';
import './settingBlock.less';
 
class Main extends Component {
    constructor() {
        super();
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
        return (
            <div className="settingItem">
                <p>推送铃声</p>
            </div>
        );
    }
    
    componentWillUnmount() {
        
    }
}
//export default Main;
export default template({
    id: 'settingBlock',  //应用关联使用的redux
    component: Main,
    url: ''
});
