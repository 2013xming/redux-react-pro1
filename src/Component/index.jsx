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
        console.log("settingData:");
        console.log(settingData);
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
        // const {increment, decrement, counter} = this.props;
        // console.log(this.props);
        // //渲染组件，包括一个数字，四个按钮
        // return (
        //     <p>
        //         Clicked: {counter} time
        //         {' '}
        //         <button onClick={increment}>+</button>
        //         {' '}
        //         <button onClick={decrement}>-</button>
        //         {' '}
        //     </p>
        // )
    }
    
}

/*export default template({
    id: 'index',  //应用关联使用的redux
    component: Main,//接收数据的组件入口
    url: ''
});
*/

const mapStateToProps = (state) =>{
	console.log("mapStateToProps:");
	console.log(state);
    return  {
        settings : state.settings
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        clickItem:(...args)=>{dispatch(action.clickItem(...args))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)

//将state.counter绑定到props的counter
// const mapStateToProps = (state) => {
//     console.log('state:');
//     console.log(state);
//     return {
//         counter: state.counter
//     }
// };
// //将action的所有方法绑定到props上
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         increment: (...args) => dispatch(action.increment(...args)),
//         decrement: (...args) => dispatch(action.decrement(...args))
//     }
// };

// //通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
// export default connect(mapStateToProps, mapDispatchToProps)(Main)
