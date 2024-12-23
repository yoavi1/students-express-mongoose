const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  skils: [
    {
      type: String,
    },
  ],
});

const studentModel = mongoose.model('student', studentSchema);
module.exports = studentModel;

app.li, () => {
  console.log(`Server started on port`);
});