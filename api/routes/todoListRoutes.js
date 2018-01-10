'use strict'
module.exports = function(app) {
    var todoList = require('../controllers/todoListController')

    app.route('/tasks')
        .post(todoList.create_a_task)

    app.route('/tasks/:taskId')
        .put(todoList.update_a_task)
}