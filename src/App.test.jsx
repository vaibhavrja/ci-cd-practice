import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders the app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/CI\/CD Practice App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders welcome message", () => {
    render(<App />);
    const welcomeMessage = screen.getByText(
      /Welcome to the React testing practice project/i,
    );
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("renders Counter component", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toBeInTheDocument();
  });
});
