import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Jointeam from '../pages/Jointeam'

it("Fill Contains Everything", async () => {
 render(<Jointeam />)

    const firstNameInput = screen.getByTestId("First Name")
    const lastNameInput = screen.getByTestId("Last Name")
    const emailInput = screen.getByTestId("Email")
    const postcodeInput = screen.getByTestId("Post Code")
    const signupbutton = screen.getByRole("button", { name: /Sign Up/i })

    // Fill out form
    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameInput, "Doe");
    userEvent.type(emailInput, "john.doe@example.com");
    userEvent.type(postcodeInput, "122102");

// Click submit
    fireEvent.click(signupbutton)

  await waitFor(() => {
        expect(screen.queryByText("Signed Up Successfully!")).not.toBeInTheDocument();
    }, { timeout: 2500 }); 
})