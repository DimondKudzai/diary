import React from 'react';
import Diary from './Diary';

const DiaryList = ({ diaries, onDelete }) => {
  return (
    <div>
      {diaries.map((diary) => (
        <Diary key={diary.id} diary={diary} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default DiaryList;