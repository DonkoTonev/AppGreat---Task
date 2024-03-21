const NOTES_API_URL = "http://localhost:8000/notes";

export const fetchAllNotes = async () => {
  try {
    const response = await fetch(NOTES_API_URL);
    if (!response.ok) {
      throw new Error("Failed to retrieve notes");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const addNewNote = async (content) => {
  try {
    const response = await fetch(NOTES_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      throw new Error("Failed to add new note");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const updateExistingNote = async (id, content) => {
  try {
    const response = await fetch(`${NOTES_API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      throw new Error("Failed to update note");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteNoteById = async (id) => {
  try {
    const response = await fetch(`${NOTES_API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete note");
    }
    return true;
  } catch (error) {
    throw error;
  }
};
