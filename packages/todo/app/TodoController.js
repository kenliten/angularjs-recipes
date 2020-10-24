(function() {

    const TodoController = function() {
        this.name = "Todo App";
        this.template = 'app/todo.html';
        this.css = 'app/todo.css';
        this.image = "images/381-256x256.jpg";
        this.todoDescription = "";
        this.todoList = [];

        this.evalInput = function(key) {
            if (key.key == 'Enter' && this.todoDescription != '') {
                this.addTodo();
            }
        }

        this.addTodo = function() {
            let todo = {
                id: this.todoList.length ? this.todoList[this.todoList.length - 1].id + 1 : 0,
                description: this.todoDescription,
                done: false
            }
            this.todoList.push(todo);
            this.todoDescription = "";
        }

        this.removeTodo = function(id) {
            var index;
            this.todoList.forEach((x, i) => {
                if (x.id == id) {
                    index = i;
                }
            });
            this.todoList.splice(index, 1);
        }
    }

    angular.module('todoApp')
        .controller('TodoController', TodoController);

})();