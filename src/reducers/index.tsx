import { combineReducers } from 'redux'
import links from './links'
import posts from './posts'
import votes from './votes'

/*
 * Reducers will change my State and they are listening all my actions
 * It's advisible use one reducer per state property
 */

 const rootReducer = combineReducers({
  links,
  posts,
  votes
})

export default rootReducer