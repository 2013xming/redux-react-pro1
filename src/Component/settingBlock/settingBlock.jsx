import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Tool} from '../../Config/Tool';
import template from '../common/template';
import SettingItem from '../settingItem/settingItem';
import './settingBlock.less';
 
class Main extends Component {
    constructor(props) {
        super(props);
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
            <div className="settingItem">
                {
                    this.props.items.map((item,index)=>{
                        return <SettingItem item={item} key={index} clickItem={clickItem} row={this.props.row} inlineRow={index}/>
                    })
                } 
            </div>
        );
    }
    
    componentWillUnmount() {
        
    }
}
export default Main;
/*export default template({
    id: 'settingBlock',  //应用关联使用的redux
    component: Main,
    url: ''
});
*/
// const mapStateToProps = (state) =>{
//     return  {
//         item: state.item
//     }
// }
// const mapDispatchToProps = (dispatch,ownProps) =>{
//     return {
        
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Main)