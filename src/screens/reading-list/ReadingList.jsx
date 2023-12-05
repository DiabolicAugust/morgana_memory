import React, { useEffect, useState } from "react";
import styles from "./ReadingList.module.css";
import BookCard from "../../components/reading-list-components/book-card/BookCard";
import AlertDialog from "../../components/alert-dialog/AlertDialog";
import AddBookDialog from "../../components/alert-dialog/add-book-dialog/AddBookDialog";
import { getBooks } from "../../services/readingListlocalStorageService";

const ReadingList = () => {
  const [addBookDialogOpened, setAddBookDialogOpened] = useState(false);
  const [books, setBooks] = useState([]);
  console.log("rerender");

  useEffect(() => setBooks(getBooks()), []);

  function closeDialog() {
    setAddBookDialogOpened(false);
  }

  window.addEventListener("books", (e) => {
    setBooks(getBooks());
  });

  return (
    <>
      <div className={styles.main}>
        <h1>Reading list</h1>
        <div>
          <button
            className={styles.addButton}
            onClick={() => setAddBookDialogOpened(true)}
          >
            Add
          </button>
        </div>
        <div className={styles.booksList}>
          <div className={styles.scrollableContainer}>
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
      {addBookDialogOpened && (
        <AlertDialog>
          <AddBookDialog onClose={closeDialog} />
        </AlertDialog>
      )}
    </>
  );
};

export default ReadingList;
