import * as types from '../constants/ActionTypes'
import fetch from 'cross-fetch'

export const selectItem = (index) => ({
    type: types.SELECTED_ITEM,
    selected: index
})

export const incrementCounter = () => ({
    type: types.UP_VOTE
});

export const decrementCounter = () => ({
    type: types.DOWN_VOTE
});

export const receiveItems = json => ({
    type: types.RECEIVE_ITEMS,
    items: json.map(item => {
        let {author, num_comments, score, title, subreddit_name_prefixed, ...rest} = item.data
        item = {author, num_comments, score, title, subreddit_name_prefixed}
        return item
    })
})

export function fetchItems() {
    return dispatch => {

      return fetch('https://www.reddit.com/.json')
        .then(response => response.json())
        .then(json => dispatch(receiveItems(json.data.children)))
    }
  }