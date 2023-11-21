const { models } = require('../db/sequelize')

async function getTasks() {
    const tasks = await models.Tasks.findAll();
    return tasks
}

async function getTask(taskId) {
    const task = await models.Tasks.findByPk(taskId)
    return task
}

async function saveNewTask(task_name, detail, state, date, time) {
    const taskCreated = await models.Tasks.create({
        task_name: task_name,
        detail: detail,
        state: state,
        date: date,
        time: time
    })
    console.log(taskCreated)
}

async function updateTask(taskId, task_name, detail, state, date, time) {
    const task = await models.Tasks.findByPk(taskId)
    if (!task) {
        throw new Error("Task not found")
    }
    await task.update({
        task_name: task_name,
        detail: detail,
        state: state,
        date: date,
        time: time
    })
}

async function deleteTask(taskId) {
    const taskToDelete = await models.Tasks.findByPk(taskId)
    taskToDelete.destroy()
}

module.exports = {
    getTask,
    getTasks,
    deleteTask,
    updateTask,
    saveNewTask
}