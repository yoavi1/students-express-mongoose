const express = require('express');
const studentModel = require('../models/students');
const router = require('express').Router();

router
  .route('/')
  .get(async (req, res) => {
    const students = await studentModel.find();
    res.status(200).json({ success: true, students });
    try {
    } catch (error) {
      res.status(400).json({ success: false });
    }
  })
  .post(async (req, res) => {
    const { name, skils } = req.body;
    console.log(name, skils);

    try {
      const newStudent = await studentModel.create({ name, skils });
      if (!newStudent) {
        return res.status(404).json({
          success: false,
        });
      }

      res.status(201).json({ success: true, newStudent });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  });

//get student by id
router.route('/:id').get(async (req, res) => {
  const student = await studentModel.findById(req.params.id);
  res.status(200).json({ success: true, student });
});

module.exports = router;
