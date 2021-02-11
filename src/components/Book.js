import React from 'react'
import sampleImage from '../sample.jpg'

function Book({name, price, category, description, id}) {
  return (
    <div className="book">
      <img src={sampleImage} alt="sample images" className="book__img"/>
      <div className="book__name">
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
        <button className="btn btn-delete">Delete</button>
      </div>
    </div>
  )
}

export default Book
