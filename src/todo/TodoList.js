import React from "react";

const TodoList = ({handleDeleteTodo, handleCompleteTodo, list}) => {
    return (
        <div className="container">
            <div className="mxw-600">
                {list && list.map((item) => {
                    return (
                        <div className={`box is-flex is-justify-content-space-between ${item.checked ? "has-background-grey-lighter" : ""}`}
                             key={item.id}
                             data-testid={`box-${item.id}`}>
                            <div className="is-flex is-align-item-center mr-2">{item.text}</div>
                            <div className="">
                                <button data-testid={`btn-complete-${item.id}`}
                                        className="button mr-2"
                                        onClick={() => handleCompleteTodo(item)}
                                        disabled={item.checked ? true : false}>
                                    check
                                </button>
                                <button data-testid={`btn-delete-${item.id}`}
                                        className="button mr-2"
                                        onClick={() => handleDeleteTodo(item)}>
                                    delete
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TodoList;