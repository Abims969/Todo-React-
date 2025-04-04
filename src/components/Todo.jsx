import styles from '../style.module.css';
import PropTypes from 'prop-types';

const Todo = ({todoItem, todoList, setTodoList}) => {
    const deleteTodo = () => {
        setTodoList (todoList.filter((item) => item.id !== todoItem.id));
        // setTodoList(newList);
        // console.log(newList);
    };

    return (
        <div>
        <div className={styles.todoitem}>
            <h3 className={styles.todoname}>{todoItem.name}</h3>
            <button 
            onClick={deleteTodo}
            className={styles.deleteButton}>Delete</button>
        </div>
        </div>
    )
}
 export default Todo;















// import {useState} from 'react';
// import './Todo.css';
// import ListItem from './Listitem';

// export default function Todo(){
// const [todo, setTodo] = useState('') ;
// const [todoList, setTodoList] = useState([]);

//     const handleChange = (e) => {
//         setTodo(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//        let tempList = todoList;
//          tempList.push(todo); 
//          setTodoList(tempList);  
//          console.log (todoList);
//          setTodo ('');    
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input onChange = {handleChange} type="text" value={todo} className="addinput" />
//                 <button type="submit" className="button">Add</button>
//             </form>
//             {todoList.map((item) => (
//                 <ListItem name={item}
//                 key={item}>
//                     </ListItem>
//             ))}
//         </div>
//     )
// }

