import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Tool} from '../../Config/Tool';
import template from '../common/template';
import *as action from '../../Redux/Action/Index';



class Article extends Component {
    constructor(props) {
        super(props);
        this.state=Object.assign({},this.state,props);
    }

    // componentWillMount() {
       
    // }
    // componentDidMount() {
        
    // }

    /*shouldComponentUpdate(nextProps, nextState) {
        
    }
    
    componentWillUpdate(nextProps,nextState){
        
    }*/
   
    render() {
        let item = this.state.item;
        let content;
        if(item.type == 'switch'){
            if(item.val == 'on')
                content =  <p id={item.id} onClick={()=>this.switchClick(item.id,this.state.row,this.state.inlineRow,item.val)} >{item.title}
                            <span className="icon-switch on"></span></p>        
            else content = <p id={item.id} onClick={()=>this.switchClick(item.id,this.state.row,this.state.inlineRow,item.val)} >{item.title}<span className="icon-switch off" ></span></p>
        }else if(item.type == 'text'){
            content = <p id={item.id} >{item.title}<span className="text">{item.val}</span></p>
        }else if(item.type == 'link'){
            content = <p id={item.id}><a href={item.val}>{item.title}<span className="icon-arrow"></span></a></p>
        } 
        return (
            <div>
                {content}
            </div>
        );
    }
    
    componentWillUnmount() {
        
    }
}
export default Article;