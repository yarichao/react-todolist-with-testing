import React, {useState, useEffect} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoHead from "./TodoHead";
import {CSVLink} from "react-csv";

const TodoPage = () => {

    const initList = localStorage.getItem('todos') ?
        JSON.parse(window.localStorage.getItem('todos')) :
        [{id: '12345', text: "Sample Todo", checked: false}];

    const [list, setList] = useState(initList);

    const handleCreateTodo = (newInput) => {
        if (!newInput) {
            return;
        }
        const newTodo = {id: Date.now(), text: newInput, checked: false};
        setList([newTodo, ...list]);
    };

    const handleDeleteTodo = (todo) => {
        setList(list.filter((item) => item !== todo));
    };

    const handleCompleteTodo = (todo) => {
        if (todo && todo.checked) {
            return;
        }
        const foundTodo = list.find(item => item === todo);
        const restTodos = list.filter((item) => item !== todo);
        setList([...restTodos, {...foundTodo, checked: true}]);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(list));
    }, [list]);

    return (
        <div>
            <TodoHead>
                <CSVLink data={list} filename={`todo ${ Date().toLocaleString()}.csv`}>
                    <button className="button is-light">Export Todos</button>
                </CSVLink>
            </TodoHead>
            <TodoInput handleCreateTodo={handleCreateTodo}/>
            <TodoList list={list} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo}/>
        </div>);
};

export default TodoPage;