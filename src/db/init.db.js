const { Task, TaskSchema } = require('./models/task')

function setupModels(sequelize) {
  Task.init(TaskSchema, Task.config(sequelize))
}

module.exports = setupModels