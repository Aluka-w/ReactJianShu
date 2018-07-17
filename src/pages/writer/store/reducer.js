import { fromJS } from 'immutable';
import * as constans from './constans'

const defaultState = fromJS({
  
})
export default  (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}