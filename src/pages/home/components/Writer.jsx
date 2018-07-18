import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators } from "../store";
import { 
  WriteWrapper,
  WriterTitle,
  WriterTitleItem,
  WriterListWrapper,
  WriterInfo,
  WriterFollow
 } from "../style";
const Writer = (props) => {
  const { writer, writerPage, totalPage, handleChangePage } = props
  let newWriterList = writer.toJS()
  let renderList = []
  for (let i = (writerPage - 1) * 5; i < writerPage * 5; i++) {
    if (newWriterList[i]) {
      renderList.push(
        <WriterListWrapper key={newWriterList[i].id}>
          <img className="pic" src={newWriterList[i].avatar_source} alt=""/>
          <WriterInfo>
            <h3>{newWriterList[i].nickname}</h3>
            <p>写{fliterWord(newWriterList[i].total_wordage)}个字, {fliterWord(newWriterList[i].total_likes_count)}喜欢</p>
          </WriterInfo>
          <WriterFollow>
            + 关注
          </WriterFollow>
        </WriterListWrapper>
      )
    }
  }
  return (
    <WriteWrapper>
      <WriterTitle>
        <WriterTitleItem className="left">推荐作者</WriterTitleItem>
        <WriterTitleItem className="right"
          onClick={() => handleChangePage(writerPage, totalPage)}
        >
          <i className="iconfont spin">&#xe851;</i>
          换一批
        </WriterTitleItem>
      </WriterTitle>
      {renderList}
    </WriteWrapper>
  )
}
// 292629, 2636
const fliterWord = (num) => {
  if (num > 1000){
    let beforePoint = Math.floor(num / 1000)
    let afterPoint = `${num % 1000}`.substring(0, 1)
    return `${beforePoint}.${afterPoint}k`
  } else {
    return num
  }
} 
const mapState = (state) => ({
  writer: state.getIn(['home', 'writer']),
  writerPage: state.getIn(['home', 'writerPage']),
  totalPage: state.getIn(['home', 'totalPage'])
})
const mapDispatch = (dispatch) => ({
  handleChangePage (page, totalPage) {
    if (page < totalPage) {
      dispatch(actionCreators.changePageAction(page + 1))
    } else {
      dispatch(actionCreators.changePageAction(1))
    }
  }
})
export default connect(mapState, mapDispatch)(withRouter(Writer))