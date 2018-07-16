import React, { PureComponent } from "react";
import { connect } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
class Home extends PureComponent {
  constructor (props) {
    super(props)
    this.bindEvent = this.bindEvent.bind(this)
  }
  render () {
    const {handleScrollTop, isShowBack} = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4349/5a2f0950cdda358517b737a9a961471be0241287.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
          {
            isShowBack ? <BackTop onClick={handleScrollTop}>顶部</BackTop> : null
          }
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount () {
    this.props.handleInitData()
    this.bindEvent()
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScroll)
  }
  bindEvent () {
    window.addEventListener('scroll', this.props.changeScroll)
  }
}
const mapState = (state) => {
  return {
    isShowBack: state.getIn(['home', 'isShowBack'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    handleInitData () {
      const action = actionCreators.initDataAction()
      dispatch(action)
    },
    handleScrollTop () {
      window.scrollTo(0, 0)
    },
    changeScroll () {
      // console.log(document.documentElement.scrollTop)
      let action = null
      const tempHeight = document.documentElement.scrollTop
      if ( tempHeight > 400) {
        action = actionCreators.changeScrollAction(true)
      } else {
        action = actionCreators.changeScrollAction(false)
      }
      dispatch(action)
    } 
  }
}
export default connect(mapState, mapDispatch)(Home)