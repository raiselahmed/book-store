import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utilitys/AddToDb";
import Book from "../Book/Book";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);
    
    
    // useEffect(()=>{
    //     const storedReadList = getStoredReadList();
    //     const storedReadListInt = storedReadList.map(id =>parseInt(id));
        
    //     const readBooksList = allBooks.map(book => book.storedReadListInt.inclludes(book.bookId));
    //     setReadList(readBooksList);
    // },[])

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)
    },[])

  return (
    <div className="my-9">
      <div>
        <h2 className="text-center text-3xl font-bold">Books</h2>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
           
            {
                readList.map((listedBook,idx)=> <ListedBook key={idx} listedBook={listedBook}></ListedBook>)
            }
         
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
