import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./app/components/login/loginForm";

describe("LoginForm", () => {
  it("should have a submit button", async () => {
    render(<LoginForm />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
