const mapStateToProps = (state) =>{
    return  {
        
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        clickItem:(...args)=>{dispatch(action.clickItem(3,'off'))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)