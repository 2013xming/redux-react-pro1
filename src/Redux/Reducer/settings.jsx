import Immutable from 'immutable'
import {SET_STATE, REQUEST_POSTS, RECEIVE_POSTS} from '../Action/Index'
import {RECORD_STATE, SAVE_PRODUCT_LIST, NEW_PRODUCT_DATA} from '../Action/Index'
import {DELETE_ITEM} from '../Action/Index'
import {GET_DATA_START , GET_DATA_SUCCESS, TEST_DISPATCH} from '../Action/Index'
import '../../utils/utils';

//const initialState = Immutable.fromJS({}) //=Immutable.Map({})

const defaultlState = Immutable.fromJS({data: {}, isFetching: false});
let lock_screen = jsKitStorage.getItem('lock_screen_open',false);
let lock_screen_val = lock_screen ? 'on' : 'off';
const initialState = {
        data:[
                [
                    {id:'lock_screen',title:'锁屏开关',type:'switch',val:lock_screen_val,storageKey:'lock_screen_open'},
                    {id:'2',title:'非Wifi网络加载22',type:'switch',val:'off',storageKey:'lock_screen_open'},
                ],
                [
                    {id:'3',title:'消息推送设置12345',type:'switch',val:'on'},     
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
    };

export const settings = (state=initialState,action={})=>{
/*    console.log("action@@@@@:");
    console.log(state);*/
    switch(action.type){
        case "CLICK_ITEM":
            state.data[action.row][action.inlineRow].val = action.val;
            return Object.assign({},state);
        default:
            return state;
    }
}

export function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1;
        case 'DECREMENT_COUNTER':
            return state - 1;
        default:
            return state
    }
};