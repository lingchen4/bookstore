import {
  BOOK_ADD_ITEM,
  BOOK_REMOVE_ITEM,
  BOOK_UPDATE_ITEM,
  CLOSE_POPUP,
  OPEN_POPUP,
} from '../constants/bookConstants'

import { samples } from "../samples";

export const bookReducer = (
  state = { bookItems: [...samples], seen:false, editItem:{name:'', price:0,category:'',description:''}},
  action
) => {
  switch (action.type) {

    case OPEN_POPUP:
      return {...state, seen:true}

    case CLOSE_POPUP:
      return {...state, seen:false,editItem:{}}

    case BOOK_ADD_ITEM:
      const item = action.payload
      const allBook = state.bookItems
      if(item.id){
        return {
          ...state,
          bookItems: [item, ...state.bookItems.filter(e=> e.id!==item.id)],
          seen:false,
          editItem:{},
        }
      }else{
        item.id = parseInt(Math.random() * 10 ** 7)
        return {
          ...state,
          bookItems: [item, ...allBook],
          seen:false,
        }
      } 
      
      
    case BOOK_REMOVE_ITEM:
      return {
        ...state,
        bookItems: state.bookItems.filter((x) => x.id !== action.payload),
      }

      case BOOK_UPDATE_ITEM:
        return {
          ...state,
          seen:true,
          editItem: action.payload
        }
    
    default:
      return state
  }
}
