import React, { useState } from "react";
import styles from "./AddBookDialog.module.css";
import { setBook } from "../../../services/readingListlocalStorageService";

const AddBookDialog = ({ onClose }) => {
  const [bookImage, setBookImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [score, setScore] = useState("");

  const handleAddBook = () => {
    console.log("meow");
    setBook({
      id: Date.now(),
      title: title,
      author: author,
      score: score,
      image_url: bookImage,
      isCompleted: false,
      dateOfCreation: Date.now(),
    });
    onClose(); // Calling the onClose function to close the dialog
  };

  return (
    <div className={styles.main}>
      <h1>Add book</h1>
      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(text) => setTitle(text.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          alue={author}
          onChange={(text) => setAuthor(text.target.value)}
        />
      </div>
      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Image url"
          alue={bookImage}
          onChange={(text) => setBookImage(text.target.value)}
        />
        <input
          type="number"
          placeholder="Score"
          alue={score}
          onChange={(text) => setScore(text.target.value)}
        />
      </div>

      <img src={bookImage} alt="" height="300px" />

      <button onClick={handleAddBook}> Add book</button>
    </div>
  );
};

export default AddBookDialog;
