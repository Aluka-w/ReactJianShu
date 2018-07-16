import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";
import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button
 } from "./style";
class Login extends PureComponent {
  render () {
    const {login} = this.props
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' innerRef={input => this.account = input}/>
            <Input placeholder='密码' type='password' style={{'WebkitAppearance': 'textfield'}} innerRef={input => this.password = input}/>
            <Button onClick={() => this.props.handleLogin(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
  }
}
const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
  handleLogin (account, password) {
    const action = actionCreators.loginAction(account.value, password.value)
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(Login)