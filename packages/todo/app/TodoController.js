(function() {

    /*
    define the TodoController as a const that hold a function definition
    this way the $scope isn't used inside the function but this instead    
    */
    const TodoController = function() {
        // I use to define first the constant data
        this.name = "Todo App";
        this.template = 'app/todo.html';
        this.css = 'app/todo.css';
        this.image = "images/381-256x256.jpg";

        // then the variables needed to the app
        this.todoDescription = "";
        this.todoList = [];

        // and then the functions I will use
        this.evalInput = function(key) {
            if (key.key == 'Enter') {
                this.addTodo();
            }
        }

        /*
        add a new todo by creating a new object with the following data
            an id, which is the last id plus one or just 0 if there aren't todo yet
            a description, the current todoDescription value,
            and a done boolean initialy false

        this object is pushed to the todoList and the todoDescription is set to and empty string
         */
        this.addTodo = function() {
            if (this.todoDescription == '') {
                return
            }
            let todo = {
                id: this.todoList.length ? this.todoList[this.todoList.length - 1].id + 1 : 0,
                description: this.todoDescription,
                done: false
            }
            this.todoList.push(todo);
            this.todoDescription = "";
        }

        /*
        to remove a todo first i need the id of the clicked todo
        take that id and look for the todo with the same id using a forEach loop
        once I found the todo, asign the index and splice it from the todoList
        */
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

    // here is where I set the controller function to the TodoController and link it to the todoApp
    angular.module('todoApp')
        .controller('TodoController', TodoController);

})();