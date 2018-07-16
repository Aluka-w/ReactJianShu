import axios from 'axios';
import * as constans from './constans';

const accountLogin = (flag) => ({
  type: constans.LOGIN,
  flag: flag
})
export const loginAction = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      if(res.data.message) {
        const action = accountLogin(true)
        dispatch(action)
      } else {
        alert('登录失败')
      }
    })
  }
}
export const logoutAction = (flag) => ({
  type: constans.LOGOUT,
  flag: flag
})