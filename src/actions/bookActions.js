import {
  BOOK_ADD_ITEM,
  BOOK_REMOVE_ITEM,
  BOOK_UPDATE_ITEM,
} from "../constants/bookConstants";

export const addBook = (name, category, price, description,id,img) => ({
  type: BOOK_ADD_ITEM,
  payload: {
    name,
    category,
    price,
    description,
    id,
    img
  },
});

export const deleteBook = (id) => ({
  type: BOOK_REMOVE_ITEM,
  payload: id,
});

export const updateBook = (name, category, price, description,id,img) => ({
  type: BOOK_UPDATE_ITEM,
  payload: {name, category, price, description, id,img },
});
