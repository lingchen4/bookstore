import React from "react";
import { samples } from "../samples";
import Book from "./Book";

function Books() {
  
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
            {samples.map((item) => (
              <Book name={item.name} price={item.price} category={item.category} description={item.description}  />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
