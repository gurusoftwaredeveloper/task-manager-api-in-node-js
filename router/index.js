const express = require('express');
const router = express.Router();
const { getAllTask, getSingleTask, createTask, DeleteTask, UpdateTask } = require('../controller/taskController');

router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getSingleTask).delete(DeleteTask).patch(UpdateTask);


module.exports = router;