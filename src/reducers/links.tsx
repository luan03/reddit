import { SELECTED_ITEM } from '../constants/ActionTypes'

  const initialState = {
    list: [],
    selected: 1000
  }

  export default function links(state = initialState, action: any) {

    switch (action.type) {

      case SELECTED_ITEM:
        return Object.assign({}, state, {
          selected: action.selected
        })

      default:
        return state
    }
  }