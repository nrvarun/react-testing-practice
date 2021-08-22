import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("Renders a heading element", async () => {
    render(<Header title="react testing" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  it("Renders the heading element with text", async () => {
    render(<Header title="react testing in progress" />);
    const headingElement = screen.getByText(/react testing in progress/i);
    expect(headingElement).toHaveTextContent("react testing in progress");
  });

  it("Renders the heading element with empty text", async () => {
    render(<Header title="" />);
    const headingElement = screen.getByTestId("header");
    expect(headingElement).toHaveTextContent("");
  });
});
