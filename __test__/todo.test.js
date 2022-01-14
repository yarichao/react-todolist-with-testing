import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import TodoPage from "../src/todo/TodoPage";

it('should render TodoPage', function () {
    render(<TodoPage />)
    expect(screen.getByText(/TodoList/i)).toBeInTheDocument()
});

it('should add a dummy todo', function () {
    render(<MockTodoPage/>)

    // addDummyTodo

    // expect Dummy Todo in the document
    expect(screen.getByText(/Dummy Todo/i)).toBeInTheDocument()
});
