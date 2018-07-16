import { RECEIVE_ITEMS } from '../constants/ActionTypes'

  const initialState = {
    items: []
  }

  export default function beers(state = initialState, action: any) {

    switch (action.type) {

      case RECEIVE_ITEMS:
        return Object.assign({}, state, {
          items: action.items
        })

      default:
        return state
    }
  }