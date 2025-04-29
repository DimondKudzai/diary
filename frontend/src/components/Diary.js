
import React from 'react';

const Diary = ({ diary, onDelete }) => {
  return (
    <div>
      <h2>{diary.title}</h2>
      <p>{diary.content}</p>
      <button onClick={() => onDelete(diary.id)}>Delete</button>
    </div>
  );
};

export default Diary;

