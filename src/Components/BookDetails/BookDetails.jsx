import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { TbArrowBack } from "react-icons/tb";
import { addToStoredReadList } from "../../Utilitys/AddToDb";
const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  console.log(data);
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  console.log(book);

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
    publisher
  } = book;

  const navigate = useNavigate()

  const goBack =()=>{
    navigate(-1);
  }

  const HandleMarkAsRead = (id)=>{
    addToStoredReadList(id);
  }


  return (

  <div className="hero lg:px-10 my-12">
    
  <div className="hero-content flex-col lg:flex-row lg:items-stretch">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="pt-3">
        By : {author}
      </p>
      <div className="divider"></div>
      <strong>{category}</strong>
      <div className="divider"></div>

      <strong>Review: <p className="font-light">{review}</p></strong>
      <div className="flex gap-3 mt-3">
        <strong>Tag:</strong>
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="btn btn-xs  text-[#23BE0A]"
            >
              #{tag}
            </button>
          ))}
        </div>
        <div className="divider"></div>

        <div className="space-x-4">
            <p>Number of Pages : <strong className="ms-4">{totalPages}</strong></p>
            <p>Publisher: <strong className="ms-4">{publisher}</strong></p>
            <p>Year of Publishing:<strong className="ms-4">{yearOfPublishing}</strong></p>
            <p>Rating<strong className="ms-4">{rating}</strong></p>
        </div>

          <div className="flex my-3">
          <button onClick={()=> HandleMarkAsRead(bookId)} className="btn btn-outline btn-primary">Read</button>
          <button className="btn btn-outline btn-secondary ms-6">Wishlist</button>
          <button onClick={goBack} className="btn btn-outline btn-secondary ms-6"><TbArrowBack /></button>
          </div>
    </div>
  </div>
</div>

   
  );
};

export default BookDetails;
