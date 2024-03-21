import React, { useEffect, useState, useRef } from 'react';
import {
  fetchAllNotes,
  addNewNote,
  updateExistingNote,
  deleteNoteById,
} from '../../APIs/recordsAPIs';
import RecordForm from '../RecordForm/RecordForm';

import styles from './recordList.module.css';

const RecordList = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const listEndRef = useRef(null);

  const scrollToBottom = () => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [notes]);

  const loadNotes = async () => {
    try {
      const notesData = await fetchAllNotes();
      setNotes(notesData.data.note);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSave = async (note) => {
    if (note.id) {
      await updateExistingNote(note.id, note.content);
    } else {
      await addNewNote(note.content);
    }
    loadNotes();
    setEditingNote(null);
  };

  const handleDelete = async (id) => {
    await deleteNoteById(id);
    loadNotes();
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  if (error) {
    return <p>Error loading notes: {error}</p>;
  }

  return (
    <div>
      {notes.length > 0 ? (
        <ul className={styles.container}>
          {notes.map((note) => (
            <li key={note.id}>
              <div className='noteContent'>{note.content}</div>
              <div>
                <button
                  className={`${styles.button} ${styles.editButton}`}
                  onClick={() => handleEdit(note)}
                >
                  Edit
                </button>
                <button
                  className={`${styles.button} ${styles.deleteButton}`}
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
          <div ref={listEndRef} />
        </ul>
      ) : (
        <p className={styles.noNotesMessage}>No notes available. Please add some!</p>
      )}
      <RecordForm
        note={editingNote}
        onSave={handleSave}
        isEditing={!!editingNote}
      />
    </div>
  );
};

export default RecordList;
