import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from './store';
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { 
  HeaderWrapper,
  Logo,
  NavWrapper,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  SearchInfoWrapper,
  SearchTitle,
  SearchSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
 } from "./style";
class Header extends PureComponent {
  constructor (props) {
    super(props)
    this.renderSearch = this.renderSearch.bind(this)
  }
  render () {
    const { focused, searchList, login, handleOnFocus, handleOnBlur, handleLogout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Addition>
          <Link to='/writer'>
            <Button className='writting'>
              <i className='iconfont'>&#xe6be;</i>
              写文章
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
        <NavWrapper>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载</NavItem>
          { 
            login ? 
            <NavItem className='right' onClick={handleLogout}>退出</NavItem> :
            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <NavSearchWrapper>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames='slide'
            >
              <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={() => handleOnFocus(searchList)}
                onBlur={handleOnBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont zoom focused' : 'iconfont zoom'}>&#xe614;</i>
            {this.renderSearch()}
          </NavSearchWrapper>
        </NavWrapper>
      </HeaderWrapper>
    )
  }
  renderSearch () {
    const { focused, mouseIn, searchList, page, totalPage, handleOnMouseEnter, handleOnMouseLeave, handleClick } = this.props
    const newSearchList = searchList.toJS()
    const newList = []
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if(newSearchList[i]) {
        newList.push(
          <SearchInfoItem key={newSearchList[i]}>{newSearchList[i]}</SearchInfoItem>
        )      
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfoWrapper
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        >
          <SearchTitle>
            热门搜索
            <SearchSwitch
              onClick={() => handleClick(page, totalPage, this.iconSpin)}
            >
              <i className='iconfont spin'
                ref={spin => this.iconSpin = spin}
              >&#xe851;</i>
              换一批
            </SearchSwitch>
          </SearchTitle>
          <SearchInfoList>
            {newList}
          </SearchInfoList>
        </SearchInfoWrapper>
      )
    } else {
      return null
    }
  }
}
const mapState = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    searchList: state.getIn(['header', 'searchList']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login']),
  }
}
const mapDispatch = (dispatch) => {
  return {
    handleOnFocus (searchList) {
      if (searchList.size === 0) {
        dispatch(actionCreators.getSearchInfoAction())
      }
      dispatch(actionCreators.onFocusAction())
    },
    handleOnBlur () {
      const action = actionCreators.onBlurAction()
      dispatch(action)
    },
    handleOnMouseEnter () {
      const action = actionCreators.onMouseInAction()
      dispatch(action)
    },
    handleOnMouseLeave () {
      const action = actionCreators.onMouseLeaveAction()
      dispatch(action)
    },
    handleClick (page, totalPage, spin) {
      let originDeg = spin.style.transform.replace(/[^0-9]/ig, '')
      if(originDeg) {
        originDeg = parseInt(originDeg, 10)
      } else {
        originDeg = 0
      }
      spin.style.transform = `rotate(${originDeg + 360}deg)`
      let action = null
      if (page < totalPage) {
        action = actionCreators.changePage(page + 1)
      } else {
        action = actionCreators.changePage(1)
      }
      dispatch(action)
    },
    handleLogout () {
      const action = loginActionCreators.logoutAction(false)
      dispatch(action)
    }
  }
}
export default connect(mapState, mapDispatch)(Header)