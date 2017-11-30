import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Tool} from '../Config/Tool';
import article from '../Component/article/article';

import *as action from '../Redux/Action/Index';

const mapStateToProps = (state) =>{
    return  {
        settings : state.settings
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(article)