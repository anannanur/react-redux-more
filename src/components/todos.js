import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../services/actions/todosActions';

const Todos = () => {

    const {isLoading, error, todos} = useSelector((state)=> state);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllTodos())
    }, [dispatch])

    return (
        <div>
            <h1>Todos App</h1>
            {isLoading && <h4>Loading...</h4>}
            {error && <h4>{error.message}</h4>}
            <section>
                {
                    todos.map(todo =>{
                        return (
                        <article key={todo.id}>
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