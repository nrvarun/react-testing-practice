import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "./TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe("TodoFooter", () => {
  it("Renders the todo footer", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={0} />);
    const todoFooter = screen.getByText("0 tasks left");
    expect(todoFooter).toBeInTheDocument();
  });

  it("Renders the todo footer with non-empty tasks", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const todoFooter = screen.getByText("5 tasks left");
    expect(todoFooter).toBeInTheDocument();
  });
});
