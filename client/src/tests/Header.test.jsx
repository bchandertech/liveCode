import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/common/Header.jsx";

test("renders the main navigation links with their expected routes", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const navigation = screen.getByRole("navigation", {
    name: "Main navigation",
  });

  expect(navigation).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
    "href",
    "/",
  );
  expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
    "href",
    "/about",
  );
  expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
    "href",
    "/contact",
  );
  expect(screen.getByRole("link", { name: "Login" })).toHaveAttribute(
    "href",
    "/login",
  );
});
