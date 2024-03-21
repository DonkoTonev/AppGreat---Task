let notes = [];
let nextId = 1;

const getAllNotes = () => notes;

const getNoteById = (id) => notes.find((note) => note.id === id);

const createNote = (content) => {
  const newNote = { id: nextId++, content };
  notes.push(newNote);
  return newNote;
};

const updateNote = (id, content) => {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes[index] = { ...notes[index], content };
    return notes[index];
  }
  return null;
};

const deleteNote = (id) => {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    return notes.splice(index, 1)[0];
  }
  return null;
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};