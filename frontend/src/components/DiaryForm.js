import React, { useState } from 'react';

const DiaryForm = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <br />
      <label>Content:</label>
      <textarea value={content} onChange={(event) => setContent(event.target.value)} />
      <br />
      <button type="submit">Create Diary</button>
    </form>
  );
};

export default DiaryForm;