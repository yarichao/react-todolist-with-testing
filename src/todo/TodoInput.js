import React, {useState} from "react";

const TodoInput = (props) => {
    const {handleCreateTodo} = props;

    const [input, setInput] = useState("");

    const handleInputTodo = (e) => {
        setInput(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleCreateTodo(input);
            setInput("");
        }
    };

    const handleAddClick = () => {
        handleCreateTodo(input);
        setInput("");
    };

    return (
        <div className="is-flex is-justify-content-center my-6">
            <div className="mr-2">
                <input className="input"
                       data-testid="input-todo"
                       type="text"
                       value={input}
                       onChange={handleInputTodo}
                       onKeyPress={handleKeyPress}/>
            </div>
            <button data-testid="btn-add"
                    className="button" onClick={handleAddClick}>
                add
            </button>
        </div>
    );
};

export default TodoInput;