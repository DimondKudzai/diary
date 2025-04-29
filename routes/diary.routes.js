
const express = require('express');
const DiaryController = require('../controllers/diary.controller');

const router = express.Router();


// all endpoints

router.get('/all_diaries', DiaryController.getAllDiaries);
router.get('/:id', DiaryController.getDiaryById);
router.post('/create', DiaryController.createDiary);
router.put('/:id', DiaryController.updateDiary);
router.delete('/:id', DiaryController.deleteDiary);

module.exports = router;