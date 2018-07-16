import { DOWN_VOTE, UP_VOTE } from '../constants/ActionTypes';

export default (state = 0, action: any) => {
    switch (action.type) {
      case UP_VOTE:
      return state + 1;

      case DOWN_VOTE:
      return state - 1;


        default:
        return state;
    }
  };