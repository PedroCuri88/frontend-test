import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "../App";

// Mock simples de WebSocket
class MockWebSocket {
  onmessage: ((this: WebSocket, ev: MessageEvent<any>) => any) | null = null;
  close = vi.fn();
  constructor() {}
}

(global as any).WebSocket = MockWebSocket as any;

describe("WatchTable", () => {
  it("mostra mensagem quando não há símbolos", () => {
    render(<App />);
    expect(screen.getByText(/Adicione símbolos acima/)).toBeInTheDocument();
  });
});