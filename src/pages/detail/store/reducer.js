import { fromJS } from 'immutable';
import * as constans from './constans'

const defaultState = fromJS({
  title: '',
  content: ''
})
export default  (state = defaultState, action) => {
  switch (action.type) {
    case constans.DETAIL_DATA:
      return state.merge({'title': action.title, 'content': action.content})
    default:
      return state
  }
}