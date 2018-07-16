import { fromJS } from 'immutable';
import * as constans from './constans'

const defaultState = fromJS({
  login: false
})
export default  (state = defaultState, action) => {
  switch (action.type) {
    case constans.LOGIN:
      return state.set('login', action.flag)
    case constans.LOGOUT:
      return state.set('login', action.flag)
    default:
      return state
  }
}