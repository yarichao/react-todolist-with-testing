import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import TodoPage from "../src/todo/TodoPage";

const MockTodoPage = () => {
    return (
        <TodoPage />
    )
}

const addDummyTodo = () => {
    // fill out the form
    fireEvent.change(screen.queryByTestId("input-todo"), {
        target: {
            value : "Dummy Todo"
        }
    })
    // click add btn
    fireEvent.click(screen.queryByTestId("btn-add"))
}

it('should add a dummy todo', function () {
    render(<MockTodoPage/>)

    addDummyTodo()

    // expect Dummy Todo in the document
    expect(screen.getByText(/Dummy Todo/i)).toBeInTheDocument()
});
