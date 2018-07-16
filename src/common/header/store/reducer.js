import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  searchList: [],
  page: 1,
  totalPage: 1
})
export default  (state = defaultState, action) => {
  switch (action.type) {
    case constants.ON_FOCUS:
      return state.set('focused', true)
    case constants.ON_BLUR:
      return state.set('focused', false)
    case constants.MOUSE_IN:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.GET_SEARCH_INFO:
      return state.merge({'searchList': action.data, 'totalPage': action.totalPage})
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}