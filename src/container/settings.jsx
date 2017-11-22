import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Tool} from '../Config/Tool';
import settings from '../Component/settings/settings';

import *as action from '../Redux/Action/Index';

const mapStateToProps = (state) =>{
	console.log("mapStateToProps:");
    return  {
        settings : state.settings
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        clickItem:(...args)=>{
            console.log(args);
            dispatch(action.clickItem(...args));
 
            window.jsKitStorage.setItem(args[4],true);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(settings)