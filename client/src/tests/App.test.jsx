import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

test("renders the shared navigation and home page", () => {
  render(<App />);

  expect(
    screen.getByRole("navigation", { name: "Main navigation" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Home", { selector: "div" })).toBeInTheDocument();
});

test("navigates to each lazy-loaded page and back home", async () => {
  const user = userEvent.setup();
  render(<App />);

  for (const [page, path] of [
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Login", "/login"],
  ]) {
    await user.click(screen.getByRole("link", { name: page }));
    expect(
      await screen.findByText(page, { selector: "div" }),
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path);
  }

  await user.click(screen.getByRole("link", { name: "Home" }));
  expect(
    await screen.findByText("Home", { selector: "div" }),
  ).toBeInTheDocument();
  expect(window.location.pathname).toBe("/");
});
