import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../pages/Contact'

it("all fields are filled", async () => {
    render(<Contact />)

    const firstNameInput = screen.getByPlaceholderText("First name*");
    const lastNameInput = screen.getByPlaceholderText("Last name");
    const emailInput = screen.getByPlaceholderText("Email*");
    const messageInput = screen.getByPlaceholderText("What can we help you with?");
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    // Fill out form
    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameInput, "Doe");
    userEvent.type(emailInput, "john.doe@example.com");
    userEvent.type(messageInput, "This is a test message.");

    // Click submit
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(screen.queryByText("We will contact you soon!")).not.toBeInTheDocument();
    }, { timeout: 2500 }); 
})