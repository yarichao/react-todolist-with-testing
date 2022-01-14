import React from "react";

const TodoList = ({list}) => {
    return (
        <div className="container">
            <div className="mxw-600">
                {list && list.map((item) => {
                    return (
                        <div className="box"
                             key={item.id}
                             data-testid={`box-${item.id}`}>
                            <div>{item.text}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TodoList;