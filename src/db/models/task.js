const { Model, DataTypes } = require('sequelize')

const TASK_TABLE = 'TASKS'

const TaskSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    task_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    detail: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 200]
        }
    },
    state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    time: {
        type: DataTypes.TIME,
        allowNull: true
    }
}

class Task extends Model {
    static associate() { }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Tasks',
            timestamps: false
        }
    }
}

module.exports = { TASK_TABLE, TaskSchema, Task }