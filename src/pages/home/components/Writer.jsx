import React from "react";
import { 
  WriteWrapper,
  WriterTitle,
  WriterTitleItem
 } from "../style";
const Writer = () => {
  return (
    <WriteWrapper>
      <WriterTitle>
        <WriterTitleItem className="left">推荐作者</WriterTitleItem>
        <WriterTitleItem className="right">
          <i className="iconfont spin">&#xe851;</i>
          换一批
        </WriterTitleItem>
      </WriterTitle>
      Writer
    </WriteWrapper>
  )
}
export default Writer