import { fromJS } from 'immutable';
import * as constans from './constans'

const defaultState = fromJS({
  topic: [],
  list: [],
  recommend: [],
  swiperList: [],
  writer: [],
  page: 1,
  isShowBack: false,
  isShowQRCode: false,
  isShowLoadMore: true,
  writerPage: 1,
  totalPage: 1
})
export default  (state = defaultState, action) => {
  switch (action.type) {
    case constans.INIT_DATA:
      return state.merge({'topic': action.topic, 'list': action.list, 'recommend': action.recommend, 'swiperList': action.swiperList, 'writer': action.writer, 'totalPage': action.totalPage})
    case constans.LOAD_MORE:
      return state.merge({'list': state.get('list').concat(action.list), 'page': action.nextPage})
    case constans.CHANG_SCROLL:
      return state.set('isShowBack', action.flag)
    case constans.MOUSE_ENTER:
      return state.set('isShowQRCode', action.flag)
    case constans.MOUSE_LEAVE:
      return state.set('isShowQRCode', action.flag)
    case constans.LOAD_MORE_SPIN:
      return state.set('isShowLoadMore', action.flag)
    case constans.CHANGE_PAGE:
      return state.set('writerPage', action.page)
    default:
      return state
  }
}