import { useState, useEffect } from 'react';
import Header from './components/Header';
import List from './components/List';
import styles from './App.module.scss';

function App() {
    const [ToDos,setToDos] = useState([]);
    const [showDone,setShowDone] = useState(true);
    const addToDo = () => {
        let cloned = [...ToDos];
        cloned.push({
            id: new Date().getTime(),
            complete: false,
            text: ''
        });
        setToDos(cloned);
        setStorageDB(cloned);
    }
    const removeToDo = (id) => {
        let cloned = [...ToDos];
        let index = cloned.findIndex((i) => {
            return i.id === id;
        });
        cloned.splice(index,1);
        setToDos(cloned);
        setStorageDB(cloned);
    }
    const updateToDo = (id,todo) => {
        let cloned = [...ToDos];
        let index = cloned.findIndex((i) => {
            return i.id === id;
        });
        cloned[index] = todo;
        setToDos(cloned);
        setStorageDB(cloned);
    }
    const setStorageDB = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    const toggleShowDone = (bool) => {
        setShowDone(bool);
        localStorage.setItem('showDone', bool);
    }

    useEffect(() => {
        const todos = localStorage.getItem('todos');
        const showDone = localStorage.getItem('showDone');
        setToDos(JSON.parse(todos) || []);
        setShowDone(showDone === 'true' ? true : false);
    },[]);

    return (
        <div className={styles.App}>
            <div className={styles.container}>
                <Header add={addToDo} showDone={showDone} setShowDone={toggleShowDone} />
                <List add={addToDo} remove={removeToDo} update={updateToDo} list={ToDos} showDone={showDone} />
            </div>
        </div>
    );
}

export default App;
