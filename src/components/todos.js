import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../services/actions/todosActions';
import styles from './Todos.module.css';

const Todos = () => {

    const {isLoading, error, todos} = useSelector((state)=> state);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllTodos())
    }, [dispatch])

    return (
        <div>
            {!isLoading && <h1 style={{color: '#FF9F29'}}>Todos App</h1>}
            {isLoading && <div style={{
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center',
                height: '80vh',
                flexDirection: 'column'
            }}>
            <h1 style={{color: 'red'}}>Loading...</h1>
            </div>}
            {error && <h4 style={{color: 'red'}}>{error}</h4>}
            
            <section className={styles.todo}>
                {
                    todos.map(todo =>{
                        return (
                        <article key={todo.id} className={styles}>
                            <h4>{todo.id}</h4>
                            <h5>{todo.title}</h5>
                        </article>
                    )})
                }
            </section>
        </div>
    );
};

export default Todos;