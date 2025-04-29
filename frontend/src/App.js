

import React, { useState, useEffect } from 'react';
import DiaryList from './components/DiaryList';
import DiaryForm from './components/DiaryForm';
import './App.css';
import diaryApi from './api/diaryApi';

function App() {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    diaryApi.getAllDiaries().then((data) => setDiaries(data));
  }, []);

  const handleDelete = (id) => {
    diaryApi.deleteDiary(id).then(() => {
      setDiaries(diaries.filter((diary) => diary.id !== id));
    });
  };

  const handleCreate = (diary) => {
    diaryApi.createDiary(diary).then((data) => {
      setDiaries([...diaries, data]);
    });
  };

  return (
    <div className="App">
      <h1>Diary App</h1>
      <DiaryForm onCreate={handleCreate} />
      <DiaryList diaries={diaries} onDelete={handleDelete} />
    </div>
  );
}

export default App;