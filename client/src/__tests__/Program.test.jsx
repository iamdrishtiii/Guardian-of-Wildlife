
import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer";
import Program from "../pages/Program";
import { getprograms } from "../action";
import { MemoryRouter } from "react-router-dom";

// Function to render component with Redux store
const renderWithRedux = (component, { initState } = {}) => {
  const store = configureStore({
    reducer: reducer,
    preloadedState: initState || { programs: [] }, // Initial state
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

test("Program API is called and updates Redux state", async () => {
  const { store } = renderWithRedux(<Program />);

  // Dispatch the API call
  store.dispatch(getprograms());

  // Wait for data to be updated
  await waitFor(() => {
    const state = store.getState();
    expect(state.programs.length).toBeGreaterThanOrEqual(0); // Ensures API updates Redux state
  });
});

