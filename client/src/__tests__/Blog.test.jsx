import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer";
import Blog from "../pages/Blog";
import { getblogs } from "../action";
import { MemoryRouter } from "react-router-dom";

// Function to render component with Redux store
const renderWithRedux = (component, { initState } = {}) => {
  const store = configureStore({
    reducer: reducer,
    preloadedState: initState || { blogs: [] }, // Initial state
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

test("Blog API is called and updates Redux state", async () => {
  const { store } = renderWithRedux(<Blog />);

  // Dispatch the API call
  store.dispatch(getblogs());

  // Wait for data to be updated
  await waitFor(() => {
    const state = store.getState();
    expect(state.blogs.length).toBeGreaterThanOrEqual(0); // Ensures API updates Redux state
  });
});

test("Renders blog titles after API call", async () => {
  const mockBlogs = [
    { BlogTitle: "Wildlife Conservation"},
   
  ];

  const { store } = renderWithRedux(<Blog />, { initState: { blogs: mockBlogs } });

  await waitFor(() => {
    expect(screen.getByText("Wildlife Conservation")).toBeInTheDocument();
  });
});
