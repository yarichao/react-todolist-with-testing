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

it('should check the sample todo ', function () {
    render(<MockTodoPage/>)
    const initCompleteBtn = screen.queryByTestId("btn-complete-12345")
    fireEvent.click(initCompleteBtn)

    expect(initCompleteBtn).toHaveAttribute('disabled');

    const initBox = screen.queryByTestId("box-12345")
    expect(initBox).toHaveClass('has-background-grey-lighter');
});

it('should delete the sample todo ', function () {
    render(<MockTodoPage/>)
    const initDeleteBtn = screen.queryByTestId("btn-delete-12345")

    fireEvent.click(initDeleteBtn)

    expect(screen.queryByText("Sample Todo")).toBeNull()
});