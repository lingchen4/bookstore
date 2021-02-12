import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_POPUP } from "../constants/bookConstants";
import { addBook } from "../actions/bookActions"

function Popup() {
  const dispatch = useDispatch();
  const editItem = useSelector(state => state.editItem)
  const [name, setName] = useState(editItem.name || '')
  const [category, setCategory] = useState(editItem.category ||'')
  const [price, setPrice] = useState(editItem.price || 0)
  const [description, setDescription] = useState(editItem.description || '')

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(name, category, price, description, editItem.id , editItem?.img))
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__close" onClick={() => dispatch({ type: CLOSE_POPUP })}>
          &times;
        </div>
        <h3 className="modal__header">
          {editItem.id ? 'Edit':'Add new'} Book
        </h3>
        <form className="modal__form" onSubmit={onSubmit}>
          <label>
            Name:
            
          </label>
          <input type="text" name="name" required value={name} onChange={e=>setName(e.target.value)}/>
          <label>
            Category:
            
          </label>
          <input type="text" name="category" required value={category} onChange={e=>setCategory(e.target.value)}/>
          <label>
            Price:
            
          </label>
          <input type="number" name="price" required value={price} onChange={e=>setPrice(e.target.value)}/>
          <label>
            Description:
            
          </label>
          <input type="text" name="descritpion" required value={description} onChange={e=>setDescription(e.target.value)}/>
          <input type="submit" className="modal__submit" value={editItem.id ? 'Update' : 'Add'}/>
        </form>
      </div>
    </div>
  );
}

export default Popup;
