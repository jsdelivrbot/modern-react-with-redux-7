import { FETCH_POST, FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST: 
      return { ...state, [action.payload.data.id]: action.payload.data }
      
    case FETCH_POSTS:
      return action.payload.data.reduce((result, item) => {
          result[item.id] = item;
        
          return result;
      }, {});
      
    default:
      return state;
  }  
}