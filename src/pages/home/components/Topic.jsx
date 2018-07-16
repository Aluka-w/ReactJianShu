import React from "react";
import { connect } from "react-redux";
import { 
  TopicWrapper,
  TopicItem,
  TopicTitle
} from "../style";
const Topic = (props) => {
  const { topic } = props
  return (
    <TopicWrapper>
    {
      topic.map(item => {
        return (
          <TopicItem key={item.get('id')}>
            <img className="topic-pic" src={item.get('img')} alt=""/>
            <TopicTitle>{item.get('title')}</TopicTitle>
          </TopicItem>
        ) 
      })
    }
    </TopicWrapper>
  )
}
const mapState = (state) => {
  return {
    topic: state.getIn(['home', 'topic'])
  }
}
export default connect(mapState, null)(Topic)