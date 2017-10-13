import React,{Component,PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Tool} from '../Config/Tool';
import {Header, template} from './common/mixin';

class Main extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	compontentWillMount(){

	}
	componentDidMount(){}
	render(){
		return(
				<div>
					<Header nav title = 'canvas' />
					<h3>canvas</h3>
					<canvas>

					</canvas>
				</div>
			)
	}
}

export default template({
	id:'mycanvas',
	component:Main,
	url:''
});