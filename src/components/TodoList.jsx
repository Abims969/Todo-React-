import Todo from './Todo.jsx';

const TodoList = ({todoList, setTodoList}) => {
    return (
    <div>
        {todoList.map ((todoItem)=>(
        <Todo 
        setTodoList={setTodoList}
        key={todoItem.id} 
        todoItem={todoItem}
        todoList={todoList}></Todo>
    ))
    }
    </div>
)
};

export default TodoList;