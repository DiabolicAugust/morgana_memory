import React from "react";
import styles from "./ReadingList.module.css";
import BookCard from "../../components/reading-list-components/book-card/BookCard";

const ReadingList = () => {
  const data = [
    {
      title: "Twilight",
      author: "Stephenie Meyer",
      score: 5,
      image_url:
        "https://m.media-amazon.com/images/I/615ZIxEDozL._AC_UF1000,1000_QL80_.jpg",
      isCompleted: true,
    },
  ];

  return (
    <div className={styles.main}>
      <h1>Reading list</h1>
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
      {data.map((book) => (
        <BookCard book={book} />
      ))}
    </div>
  );
};

export default ReadingList;
