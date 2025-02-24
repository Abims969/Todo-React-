import {useState} from 'react';
import './Todo.css';
import ListItem from './Listitem';

export default function Todo(){
const [todo, setTodo] = useState('') ;
const [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       let tempList = todoList;
         tempList.push(todo); 
         setTodoList(tempList);  
         console.log (todoList);
         setTodo ('');    
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange = {handleChange} type="text" value={todo} className="addinput" />
                <button type="submit" className="button">Add</button>
            </form>
            {todoList.map((item) => (
                <ListItem name={item}
                key={item}>
                    </ListItem>
            ))}
        </div>
    )
}

