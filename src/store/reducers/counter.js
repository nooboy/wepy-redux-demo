import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'

export default handleActions({
  [INCREMENT] (state) {
    console.log('---handleAction increment: ', state)
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    console.log('---handleAction decrement: ', state)
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    console.log('---handleAction async increment: ', state)
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, {
  num: 0,
  asyncNum: 0
})
