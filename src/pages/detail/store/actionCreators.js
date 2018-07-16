import axios from 'axios';
import * as constans from './constans';

const detailData = (data) => ({
  type: constans.DETAIL_DATA,
  title: data.title,
  content: data.content
})
export const detailDataAction = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then(res => {
      const action = detailData(res.data.message)
      dispatch(action)
    })
  }
}