export function getNotes() {
  const notes = localStorage.getItem("notes");
  if (notes) {
    const mynotes = JSON.parse(notes);
    return mynotes;
  }
  return [];
}

export function setNote(note) {
  const otherNotes = getNotes();

  localStorage.setItem("notes", JSON.stringify([note, ...otherNotes]));
  window.dispatchEvent(new Event("notes"));
}

export function setNewNote() {
  const otherNotes = getNotes();

  localStorage.setItem(
    "notes",
    JSON.stringify([
      {
        id: Date.now(),
        title: "New note",
        description: "New note description",
        dateOfCreation: Date.now(),
      },
      ...otherNotes,
    ])
  );
  window.dispatchEvent(new Event("notes"));
}

export function updateNoteDesc(newDesc, noteId) {
  const otherNotes = getNotes();

  const updatedNotes = otherNotes.map((e) => {
    if (e.id == noteId) {
      return { ...e, description: newDesc, dateOfEdit: Date.now() };
    }
    return e;
  });

  localStorage.setItem("notes", JSON.stringify([...updatedNotes]));
  window.dispatchEvent(new Event("notes"));
}
