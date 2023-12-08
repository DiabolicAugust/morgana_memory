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
  const otherBooks = getBooks();

  const updatedBooks = otherBooks.map((e) => {
    if (e.id === bookId) {
      return { ...e, isCompleted: newState, dateOfEdit: Date.now() };
    }
    return e;
  });

  localStorage.setItem("books", JSON.stringify([...updatedBooks]));
  window.dispatchEvent(new Event("books"));
}

export function deleteBook(bookId) {
  const otherBooks = getBooks();
  const updatedBooks = otherBooks.filter((card) => card.id !== bookId);
  localStorage.setItem("books", JSON.stringify([...updatedBooks]));
  window.dispatchEvent(new Event("books"));
}
