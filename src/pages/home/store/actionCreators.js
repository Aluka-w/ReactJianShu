import axios from 'axios';
import { fromJS } from "immutable";
import * as constans from './constans'

const initaData = (data) => ({
  type: constans.INIT_DATA,
  list: fromJS(data.list),
  topic: fromJS(data.topic),
  recommend: fromJS(data.recommend)
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
      const action = loadMore(res.data.message, (page + 1))
      dispatch(action)
    })
  }
}
export const changeScrollAction = (flag) => ({
  type: constans.CHANG_SCROLL,
  flag: flag
})