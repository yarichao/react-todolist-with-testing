import React, {useState} from "react";
import TodoInput from "./TodoInput"
import TodoList from "./TodoList";

const TodoPage = () => {

    const [list, setList] = useState([]);

    const handleCreateTodo = (newInput) => {
        if (!newInput) {
            return;
        }
        const newTodo = { id: Date.now(), text: newInput, checked: false };
        setList([newTodo, ...list]);
    };

    return( <div>
       <TodoInput handleCreateTodo={handleCreateTodo} />
       <TodoList list={list} />
    </div> )
}

export default TodoPage;