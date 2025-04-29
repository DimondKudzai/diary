const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const diaryRoutes = require('./routes/diary.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', diaryRoutes);


// make index.html from react front-end the default page with empty endpoint which is ""

app.use(express.static('./frontend/public'));
app.get("", (req, res) => {
  res.sendFile('./frontend/public/index.html');
});



const port = 3001; // port must match frontend

app.listen(port, () => {
console.log(`Server started on port ${port}`);
});

db.getConnection((err, connection) => {
if (err) {
console.error('Error connecting to database:', err);
} else {
console.log('Connected to database');
}
});