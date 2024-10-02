import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from "./TodoApp"
import React from "react"


describe('Todo Component', () => {
    // headlessmode = false
    test('sollte den Nutzern erlauben eine todo hinzuzufügen', () => {
        render(<TodoApp />)

        const inputElement = screen.getByPlaceholderText(/Add a new task/i)
        fireEvent.change(inputElement, { target: { value: 'Learn Jest' } })

        const addButtonElement = screen.getByText(/Add Todo/i)
        fireEvent.click(addButtonElement)

        const todoElement = screen.getAllByText(/Learn Jest/i)
        // das gibt uns ein array von zwei elementen zurück
        //console.log(JSON.stringify(todoElement.toString()))
        //expect(todoElement.length).toEqual(2)
        //expect(todoElement).toHaveLength(2)
        todoElement.map(todo =>
            expect(todo).toBeInTheDocument())
    })

    test('sollte dem Nutzer erlauben ein todo zu löschen', () => {
        render(<TodoApp />)

        const inputElement = screen.getByPlaceholderText(/Add a new task/i)
        fireEvent.change(inputElement, { target: { value: 'Learn Testing' } })

        const addButtonElement = screen.getByText(/Add Todo/i)
        fireEvent.click(addButtonElement)

        const deleteButtonElements = screen.getAllByText(/Delete Todo/i)

        for (let button of deleteButtonElements) {
            fireEvent.click(button)
        }

        const todoElement = screen.queryAllByText(/Learn Testing/i)
        expect(todoElement).toHaveLength(0)

    })

})