import React, {PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import { 
  ListWrapper,
  ListInfo,
  LoadMore
 } from "../style";
class List extends PureComponent {
  render () {
    const {list, page, handleLoadMore} = this.props
    return (
      <Fragment>
        {
          list.map((item, index) => {
          return (
            <Link to={'/detail/' + item.get('id')} key={index}>
              <ListWrapper>
                <img className="pic" src={item.get("img")} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListWrapper>
            </Link>
          )
          })
        }
        <LoadMore onClick={() => handleLoadMore(page)}>加载更多</LoadMore>
      </Fragment>
    )
  }
}
const mapState = (state) => {
  return {
    list: state.getIn(['home', 'list']),
    page: state.getIn(['home', 'page'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    handleLoadMore (page) {
      const action = actionCreators.loadMoreAction(page)
      dispatch(action)
    }
  }
}
export default connect(mapState, mapDispatch)(List)