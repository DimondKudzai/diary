const db = require('../config/db');


 // database interactions
 
class Diary {
  async getAllDiaries() {
    const [rows] = await db.execute('SELECT * FROM diaries');
    return rows;
  }

  async getDiaryById(id) {
    const [rows] = await db.execute('SELECT * FROM diaries WHERE id = ?', [id]);
    return rows[0];
  }

  async createDiary(diary) {
    const [result] = await db.execute('INSERT INTO diaries SET ?', diary);
    return result.insertId;
  }

  async updateDiary(id, diary) {
    await db.execute('UPDATE diaries SET ? WHERE id = ?', [diary, id]);
  }

  async deleteDiary(id) {
    await db.execute('DELETE FROM diaries WHERE id = ?', [id]);
  }
}

module.exports = Diary;