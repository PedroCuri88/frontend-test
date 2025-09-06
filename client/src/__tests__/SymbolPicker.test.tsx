import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("SymbolPicker", () => {
  it("renderiza campo de busca", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Ex.: BTCUSDT");
    expect(input).toBeInTheDocument();
  });

  it("permite digitar no campo de busca", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Ex.: BTCUSDT");
    await userEvent.type(input, "ETH");
    expect(input).toHaveValue("ETH");
  });
});