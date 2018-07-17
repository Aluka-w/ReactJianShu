import React, { PureComponent } from "react";
import { connect } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
import { Carousel } from 'antd';
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
    const {handleScrollTop, isShowBack, swiperList} = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
        <Carousel autoplay>
          {
            swiperList.map(item => {
              return <img className="banner-img" key={item.get('id')} src={item.get('img')} alt=""/>
            })
          }
        </Carousel>
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
    isShowBack: state.getIn(['home', 'isShowBack']),
    swiperList: state.getIn(['home', 'swiperList'])
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