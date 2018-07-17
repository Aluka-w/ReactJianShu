import axios from 'axios';
import { fromJS } from "immutable";
import * as constans from './constans'

const initaData = (data) => ({
  type: constans.INIT_DATA,
  list: fromJS(data.list),
  topic: fromJS(data.topic),
  recommend: fromJS(data.recommend),
  swiperList: fromJS(data.swiperList)
})
const loadMore = (data, nextPage) => ({
  type: constans.LOAD_MORE,
  list: fromJS(data),
  nextPage: nextPage
})
export const initDataAction = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then(res => {
      const action = initaData(res.data.message)
      dispatch(action)
    })
  }
}
export const loadMoreAction = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeLoadMore.json?page=${page}`).then(res => {
      dispatch(loadMore(res.data.message, (page + 1)))
      dispatch(loadMoreSpinAction(false))
    })
  }
}
export const changeScrollAction = (flag) => ({
  type: constans.CHANG_SCROLL,
  flag: flag
})
export const mouserEnterAction = (flag) => ({
  type: constans.MOUSE_ENTER,
  flag: flag
})
export const mouseLeaveAction = (flag) => ({
  type: constans.MOUSE_LEAVE,
  flag: flag
})
export const loadMoreSpinAction = (flag) => ({
  type: constans.LOAD_MORE_SPIN,
  flag: flag
})