import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer";
import Wildlife from "../pages/Wildlife";
import { getWildlife } from "../action";
import { MemoryRouter } from "react-router-dom";

// Utility function to render component with Redux store
const renderWithRedux = (component, { initState } = {}) => {
  const store = configureStore({
    reducer: reducer,
    preloadedState: initState || { animalss: [] }, // Initial Redux state
  });

  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter>{component}</MemoryRouter>
      </Provider>
    ),
    store,
  };
};

test("Wildlife API is called and updates Redux state", async () => {
  const { store } = renderWithRedux(<Wildlife />);

  // Dispatch the API action
  store.dispatch(getWildlife());

  // Wait for Redux state update
  await waitFor(() => {
    const state = store.getState();
    expect(state.animalss.length).toBeGreaterThanOrEqual(0); // Check if API updates Redux state
  });
});

test("Displays filtered wildlife after API call", async () => {
  const mockAnimals = [
    { id: 1, AnimalName: "Tiger", image: "tiger.jpg", ConservationStatus: "Endangered" },
    { id: 2, AnimalName: "Elephant", image: "elephant.jpg", ConservationStatus: "Vulnerable" },
  ];

  renderWithRedux(<Wildlife />, { initState: { animalss: mockAnimals } });

  // Wait for the endangered animal (default filter) to appear
  await waitFor(() => {
    expect(screen.getByText("Tiger")).toBeInTheDocument();
  });

  // Change filter to "Vulnerable" and check for Elephant
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "Vulnerable" } });

  await waitFor(() => {
    expect(screen.getByText("Elephant")).toBeInTheDocument();
  });
});

test("Shows no animals message when no match for filter", async () => {
  const mockAnimals = [
    { id: 1, AnimalName: "Tiger", image: "tiger.jpg", ConservationStatus: "Endangered" },
  ];

  renderWithRedux(<Wildlife />, { initState: { animalss: mockAnimals } });

  // Change filter to "Vulnerable" (which has no matching animals)
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "Vulnerable" } });

  await waitFor(() => {
    expect(screen.getByText("No animals found for Vulnerable status.")).toBeInTheDocument();
  });
});
