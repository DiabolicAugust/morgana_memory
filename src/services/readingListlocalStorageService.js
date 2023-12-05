export function getBooks() {
  const books = localStorage.getItem("books");
  if (books) {
    const myBooks = JSON.parse(books);
    return myBooks;
  }
  return [];
}

export function setBook(book) {
  const otherBooks = getBooks();

  localStorage.setItem("books", JSON.stringify([book, ...otherBooks]));
  window.dispatchEvent(new Event("books"));
}

export function updateBookState(newState, bookId) {
  const otherNotes = getBooks();

  const updatedNotes = otherNotes.map((e) => {
    if (e.id == bookId) {
      return { ...e, isCompleted: newState, dateOfEdit: Date.now() };
    }
    return e;
  });

  localStorage.setItem("books", JSON.stringify([...updatedNotes]));
  window.dispatchEvent(new Event("books"));
}
