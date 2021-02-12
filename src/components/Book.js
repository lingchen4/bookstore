import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteBook, updateBook } from '../actions/bookActions';
import sampleImage from '../sample.jpg'

function Book({name, price, category, description, id, img}) {

  const dispatch = useDispatch()
  const handleDelete = () =>{
    dispatch(deleteBook(id))
  }

  const handleEdit = () => {
    dispatch(updateBook(name, category, price, description, id, img))
  }

  return (
    <div className="book">
      <img src={img || sampleImage} alt="sample images" className="book__img" onClick={(id)=>handleEdit(id)}/>
      <div className="book__name" onClick={(id)=>handleEdit(id)}>
        {name}
      </div>
      <div className="book__category">
        {category}
      </div>
      <div className="book__price">
        ${price}
      </div>
      <div className="book__desciption">
        {description}
      </div>
      <div className="book__desciption">
        <button className="btn btn-delete" onClick={(id) => handleDelete(id)}>Delete</button>
      </div>
    </div>
  )
}

export default Book
