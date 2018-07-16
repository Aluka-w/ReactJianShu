import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable'

const getSearchInfo = (data) => ({
  type: constants.GET_SEARCH_INFO,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
export const onFocusAction = () => ({
  type: constants.ON_FOCUS
})
export const onBlurAction = () => ({
  type: constants.ON_BLUR
})
export const onMouseInAction = () => ({
  type: constants.MOUSE_IN
})
export const onMouseLeaveAction = () => ({
  type: constants.MOUSE_LEAVE
})
export const getSearchInfoAction = () => {
  return (dispatch) => {
    axios.get('/api/searchInfo.json').then(res => {
      const action = getSearchInfo(res.data.message)
      dispatch(action)
    })
  }
}
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page: page
})
