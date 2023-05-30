const InputTodo = document.getElementById('InputTodo');
const Form = document.getElementById('TodoForm');

let TodoList = [];

//take input
Form.addEventListener("submit", (e) => {
    if (InputTodo.value != '') {
        e.preventDefault();
        TodoList = [...TodoList, InputTodo.value]
        ShowTodo();
        InputTodo.value = ''
    }else{
        alert("please Enter Todo First..!")
    }
})


const ShowTodo = () => {
    let Todos = '';

    TodoList.map((data, ind) => {
        return Todos += ` <div class="todo">
        <p id='todoText'>${data}</p>
        <button id='EditTodo' onclick='EditTodo(${ind})'>EDIT</button>
        <button id='DeleteTodo' onclick='DeleteTodo(${ind})'>DELETE</button>
    </div>`
    })

    document.getElementById('TodoContainer').innerHTML = Todos;

}





const EditTodo = (id) => {
    let newData = prompt('Enter new data..!');
    if (newData) {
        let updateItem = TodoList.findIndex((data, ind) => id === ind)
        TodoList.splice(updateItem, 1, newData);
        ShowTodo();
    } else {
        console.log("blank")
    }
}


const DeleteTodo = (id) => {
    let newTodo = TodoList.filter((data, ind) => {
        return ind != id;
    })

    TodoList = newTodo;
    ShowTodo();
}




