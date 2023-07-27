import React from 'react'
import axios from 'axios';

export async function getServerSideProps(){
    const response = await axios.get('http://localhost:3003/book');
    const data = await response.data;

    return{
        props:{
            books:data,
        }
    }
}

const BookPage = ({books}) => {
  return (
    <div>
        <h1>All Books</h1>
        {books.map(book => {
            return(
                <div key={book.id}>
                    <h2>{book.id}</h2>
                    <h2>{book.title}</h2>
                    <hr/>
                </div>
            );
        })}
    </div>
  )
}

export default BookPage