import React from "react";
import { connect } from "react-redux";
import { 
  RecommenWrapper,
  RecommenItem
 } from "../style";
const Recommend = (props) => {
  const {recommend} = props
  return (
    <RecommenWrapper>
      {
        recommend.map(item => {
          return (
            <RecommenItem key={item.get('id')} imgUrl={item.get('img')}></RecommenItem>
          )
        })
      }
    </RecommenWrapper>
  )
}
const mapState = (state) => {
  return {
    recommend: state.getIn(['home', 'recommend'])
  }
}
export default connect(mapState, null)(Recommend)