import styles from './List.module.scss';
import { CheckBox, CheckBoxOutlineBlank, Delete } from '@mui/icons-material';

const List = (props) => {
    const { add, remove, update, list, showDone } = props;
    const updateToDo = (todo,field,value) => {
        todo[field] = value;
        update(todo.id,todo);
    }
    const filtered = () => {
        return list.filter((todo) => {
            if(!showDone){
                return !todo.checked
            }
            return todo;
        }) || [];
    }
    return(
        <div className={styles.List}>
            {filtered().length === 0 && <button className={styles.addText} onClick={() => add()}>Add a To Do</button>}
            {filtered().map((todo) => {
                return <div key={todo.id} className={styles.listItem}>
                    {todo.checked && <button onClick={() => updateToDo(todo,'checked',false)}>
                        <CheckBox />
                    </button>}
                    {!todo.checked && <button onClick={() => updateToDo(todo,'checked',true)}>
                        <CheckBoxOutlineBlank />
                    </button>}
                    <input className={todo.checked ? styles.checked : null} value={todo.text} onChange={(e) => updateToDo(todo,'text',e.target.value)} />
                    <button onClick={() => remove(todo.id)}>
                        <Delete />
                    </button>
                </div>
            })}
        </div>
    )
}

export default List;