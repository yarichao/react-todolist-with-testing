import React from "react";

const TodoHead = ({children}) => {
    return (
        <section className="hero is-info is-small">
            <div className="hero-body container has-text-centered">
                <div className="is-flex is-justify-content-center">
                    <div className="title mr-4">
                        TodoList
                    </div>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default TodoHead;
