const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');

// Unprotected endpoints
router.post('/', taskController.createTask);

// Protected endpoints 
router.get('/all', taskController.getTasks)
router.get('/:id', taskController.getTask)
router.patch('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask)

module.exports = router