const taskService = require('../services/task');

const createTask = async (req, res) => {
    try {
        const { task_name, detail, state, date, time } = req.body;
        const task = await taskService.saveNewTask(task_name, detail, state, date, time);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const task = await taskService.getTask(taskId);
        if (!task) {
            res.status(404).send('Task not found')
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { task_name, detail, state, date, time } = req.body;
        const task = await taskService.updateTask(req.params.id, task_name, detail, state, date, time);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        await taskService.deleteTask(taskId)
        res.status(204).send()
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    } 
};

module.exports = {
    createTask,
    getTask,
    getTasks,
    updateTask,
    deleteTask
};