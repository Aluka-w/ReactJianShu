import { fromJS } from 'immutable';
import * as constans from './constans'

const defaultState = fromJS({
  topic: [],
  list: [],
  recommend: [],
  page: 1,
  isShowBack: false
})
export default  (state = defaultState, action) => {
  switch (action.type) {
    case constans.INIT_DATA:
      return state.merge({'topic': action.topic, 'list': action.list, 'recommend': action.recommend})
    case constans.LOAD_MORE:
      return state.merge({'list': state.get('list').concat(action.list), 'page': action.nextPage})
    case constans.CHANG_SCROLL:
      return state.set('isShowBack', action.flag)
    default:
      return state
  }
}