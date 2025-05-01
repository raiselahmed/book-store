import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { CiFileOn } from "react-icons/ci";


const ListedBook = ({ listedBook }) => {
  const {
    bookId: currentBookId,
    bookName,
    author,
    image,
    tags,
    category,
    review,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
  } = listedBook;

  return (
    <div>
     
        <div className="flex gap-4 border ps-3 my-6 rounded-2xl py-5">
          <img
            // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            src={image}
            className="w-[129px] h-[172px] my-auto rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">{bookName}</h1>
            <p className="py-3">By : {author}</p>
            <div className="flex gap-3">
              <strong>Tag:</strong>
              {tags.map((tag, idx) => (
                <button key={idx} className="btn btn-xs  text-[#23BE0A]">
                  #{tag}
                </button>
              ))}
              <div className="flex items-center">
              <CiLocationOn />
              <p className="ms-2"> Year of Publishing: {yearOfPublishing}</p>
              </div>             
            </div>

            <div className=" flex justify-between my-3">
             <div className="flex items-baseline-last gap-3">
             <LuUsers />  <p>{publisher} </p>
             </div>
             <div className="flex items-center">
             <CiFileOn /> <p>Pages {totalPages}</p>
             </div>
              </div>
              <div className="divider"></div>
            <div className="flex gap-4">
            <button className="btn btn-soft btn-primary">{category}</button>
            <button className="btn btn-soft btn-secondary">Rating {rating}</button>
            <button className="btn btn-soft btn-accent">View Details</button>
            </div>

          </div>
        </div>
      </div>
    
  );
};

export default ListedBook;
