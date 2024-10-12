import { App } from ".";
import { render, screen, fireEvent } from "@testing-library/react";

test("demo", () => {
    expect(true).toBe(true);
});

test("Renders the main page", () => {
    render(<App />);
    expect(true).toBeTruthy();
});

describe("User", () => {
    test("renders heading", async () => {
        render(<App />);
        expect(screen.getByRole("heading", { name: /Vite/i })).toBeInTheDocument();
    });
});

test("increasing count when clicking on button", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByRole("button", { name: /count is 1/i })).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByRole("button", { name: /count is 2/i })).toBeInTheDocument();
});
