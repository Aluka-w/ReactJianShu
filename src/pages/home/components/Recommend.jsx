import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { 
  RecommenWrapper,
  RecommenItem,
  QRCodeWrapper,
  QRImg,
  QRWord,
  BigQRImg
 } from "../style";
const Recommend = (props) => {
  const { recommend, isShowQRCode, handleMouseEnter, handleMouseLeave } = props
  return (
    <RecommenWrapper>
      {
        recommend.map(item => {
          return (
            <RecommenItem key={item.get('id')} imgUrl={item.get('img')}></RecommenItem>
          )
        })
      }
      {
        isShowQRCode ? 
        <BigQRImg></BigQRImg> :
        null
      }
      <QRCodeWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <QRImg></QRImg>
        <QRWord>
          查看我私人微信 >
          <span className="me">随时随地发现真正的我</span>
        </QRWord>
      </QRCodeWrapper>
    </RecommenWrapper>
  )
}
const mapState = (state) => {
  return {
    recommend: state.getIn(['home', 'recommend']),
    isShowQRCode: state.getIn(['home', 'isShowQRCode'])
  }
}
const mapDispatch = (dispatch) => ({
  handleMouseEnter () {
    const action = actionCreators.mouserEnterAction(true)
    dispatch(action)
  },
  handleMouseLeave () {
    const action = actionCreators.mouseLeaveAction(false)
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(Recommend)