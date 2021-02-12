import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import Book from "./Book";

function Books() {
  const [books, setbooks] = useState([])
  const Books = useSelector(state => state.bookItems)
  
  useEffect(() => {
    setbooks(Books)
  }, [Books])
  return (
    <div>
      <div className="container">
        <div className="books">
          <div className="books__cover">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Books/XCM_Manual_1307595_1571885_CA_VDAY21_ca_ca_books_vday_gift_guide_ca_en_3669856_1500x415_en_CA.jpg"
              alt=""
            />
          </div>
          <div className="books__container">
            {books.map((item) => (
              <Book name={item.name} price={item.price} category={item.category} description={item.description} id={item.id} key={item.id} img={item.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
