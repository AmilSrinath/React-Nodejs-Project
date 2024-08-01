import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const response = await axios.get("http://localhost:8800/books");
                setBooks(response.data);
            } catch (err) {
                console.error("Error fetching books:", err);
            }
        }
        fetchAllBooks();
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <div>
                {books.map((book) => (
                    <h2 key={book.id}>{book.title}</h2>
                ))}
            </div>
        </div>
    );
};

export default Book;
