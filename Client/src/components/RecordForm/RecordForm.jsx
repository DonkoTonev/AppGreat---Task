import React, { useState, useEffect } from 'react';
import styles from './recordForm.module.css';

const RecordForm = ({ note = {}, onSave, isEditing }) => {
  const [content, setContent] = useState(note ? note.content : '');

  useEffect(() => {
    if (note) {
      setContent(note.content);
    } else {
      setContent('');
    }
  }, [note]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave({ ...note, content });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type='submit' className={styles.button}>
        {isEditing ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default RecordForm;
