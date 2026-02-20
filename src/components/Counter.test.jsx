import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders counter with initial value of 0", () => {
    render(<Counter />);
    const display = screen.getByTestId("counter-display");
    expect(display).toHaveTextContent("0");
  });

  test("renders all buttons", () => {
    render(<Counter />);
    expect(screen.getByTestId("increment-button")).toBeInTheDocument();
    expect(screen.getByTestId("decrement-button")).toBeInTheDocument();
    expect(screen.getByTestId("reset-button")).toBeInTheDocument();
  });

  test("increments count when increment button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByTestId("increment-button");
    const display = screen.getByTestId("counter-display");

    await user.click(incrementButton);
    expect(display).toHaveTextContent("1");

    await user.click(incrementButton);
    expect(display).toHaveTextContent("2");
  });

  test("decrements count when decrement button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const decrementButton = screen.getByTestId("decrement-button");
    const display = screen.getByTestId("counter-display");

    await user.click(decrementButton);
    expect(display).toHaveTextContent("-1");

    await user.click(decrementButton);
    expect(display).toHaveTextContent("-2");
  });

  test("resets count to 0 when reset button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByTestId("increment-button");
    const resetButton = screen.getByTestId("reset-button");
    const display = screen.getByTestId("counter-display");

    // Increment a few times
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(display).toHaveTextContent("3");

    // Reset
    await user.click(resetButton);
    expect(display).toHaveTextContent("0");
  });

  test("handles multiple operations correctly", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByTestId("increment-button");
    const decrementButton = screen.getByTestId("decrement-button");
    const resetButton = screen.getByTestId("reset-button");
    const display = screen.getByTestId("counter-display");

    // Increment twice
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(display).toHaveTextContent("2");

    // Decrement once
    await user.click(decrementButton);
    expect(display).toHaveTextContent("1");

    // Reset
    await user.click(resetButton);
    expect(display).toHaveTextContent("0");

    // Decrement from 0
    await user.click(decrementButton);
    expect(display).toHaveTextContent("-1");
  });

  test("buttons have correct aria labels", () => {
    render(<Counter />);

    expect(screen.getByLabelText("Increment")).toBeInTheDocument();
    expect(screen.getByLabelText("Decrement")).toBeInTheDocument();
    expect(screen.getByLabelText("Reset")).toBeInTheDocument();
  });
});
