import React from "react";
import { Link, useNavigate } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, category } = book;

const navigate = useNavigate();

const handleDetails = ()=>{
  navigate(`/books/${bookId}`)
}
  return (

     <div className="card bg-base-100 w-96 shadow-sm hover:shadow-lg p-6 border">
      <figure className="py-8 rounded-2xl">
        <img className="h-[166px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex gap-3">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="btn btn-xs bg-[#f4fcf3] text-[#23BE0A]"
            >
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By : {author}</p>
        <div className="border-t-2 my-5 border-dotted"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="rating flex items-center gap-1">
            5.00
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="1 star"
            />
          </div>

          
        </div>
        <div className="flex items-center justify-center">

        <button onClick={handleDetails} className="btn btn-outline btn-secondary ">View Details</button>
        </div>
      </div>
    </div>

  );
};

export default Book;
