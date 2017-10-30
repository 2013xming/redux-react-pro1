import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Tool} from '../../Config/Tool';
import template from '../common/template';
import './settingBlock.less';
 
class Main extends Component {
    constructor(props) {
        super(props);
        this.switchClick = (event)=>{
            console.log(event);
            console.log(this);
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
        return (
            <div className="settingItem">
                {
                    this.props.items.map((item,index)=>{
                        if(item.type == 'switch'){
                            if(item.val == 'on')
                                return <p key={index}>{item.title} <span className="icon-switch on" onClick={this.switchClick}></span></p>;
                            else return <p key={index}>{item.title} <span className="icon-switch off"></span></p>;
                        }else if(item.type == 'text'){
                            return <p key={index}>{item.title} <span className="text">{item.val}</span></p>
                        }else if(item.type == 'link'){
                            return <p key={index}><a href={item.val}>{item.title}<span className="icon-arrow"></span></a></p>
                        } 
                    })
                } 
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
