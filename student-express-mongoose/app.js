const express = require('express');
// const { connect, get } = require('mongoose');
const connectDB = require('./db-connect');
require('dotenv').config();
const studentModel = require('./models/students');
const students = require('./routes/students');

const PORT = process.env.PORT;

const app = express();
connectDB();

app.use(express.json());

// app.get('/', async (req, res) => {
//   const students = await studentModel.find();
//   console.log(students);
//   res.status(200).json({
//     students,
//   });
// });

app.use('/students', students);
// app.post('/', async (req, res) => {
//   const { name, skils } = req.body;
//   console.log(name, skils);

//   try {
//     const newStudent = await studentModel.create({ name, skils });
//     if (!newStudent) {
//       return res.status(404).json({
//         success: false,
//       });
//     }

//     res.status(201).json({ success: true, newStudent });
//   } catch (error) {
//     res.status(500).json({ success: false });
//   }
// });

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
