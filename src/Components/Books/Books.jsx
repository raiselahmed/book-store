import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('../../../public/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='my-20'>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
            <p>books : {books.length}</p>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    books.map((book, idx) =><Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;