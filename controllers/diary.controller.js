const Diary = require('../models/diary.model');

class DiaryController {


// get all diaries

  async getAllDiaries(req, res) {
    try {
      const diaries = await Diary.getAllDiaries();
      res.json(diaries);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching diaries' });
    }
  }

 // get diary by id
 
  async getDiaryById(req, res) {
    try {
      const id = req.params.id;
      const diary = await Diary.getDiaryById(id);
      if (!diary) {
        res.status(404).json({ message: 'Diary not found' });
      } else {
        res.json(diary);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching diary' });
    }
  }


// create diary


  async createDiary(req, res) {
    try {
      const diary = req.body;
      const id = await Diary.createDiary(diary);
      res.json({ message: 'Diary created successfully', id });
    } catch (error) {
      res.status(500).json({ message: 'Error creating diary' });
    }
  }
  
  
  // update diary

  async updateDiary(req, res) {
    try {
      const id = req.params.id;
      const diary = req.body;
      await Diary.updateDiary(id, diary);
      res.json({ message: 'Diary updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating diary' });
    }
  }


 // delete diary
 
  async deleteDiary(req, res) {
    try {
      const id = req.params.id;
      await Diary.deleteDiary(id);
      res.json({ message: 'Diary deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting diary' });
    }
  }
}

module.exports = DiaryController;