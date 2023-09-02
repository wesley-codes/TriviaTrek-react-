import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../modal";

// Mock the restart and closeModal functions
const mockRestart = jest.fn();
const mockCloseModal = jest.fn();

describe("Modal Component", () => {
  beforeEach(() => {
    render(
      <Modal score={100} closeModal={mockCloseModal} restart={mockRestart} />
    );
  });

  it("renders the modal with the correct score", () => {
    const scoreElement = screen.getByText("Your score");
    const scoreValue = screen.getByText("100");
    expect(scoreElement).toBeInTheDocument();
    expect(scoreValue).toBeInTheDocument();
  });

  it("sholud closeModal and restart when the close button is clicked", () => {
    const closeButton = screen.getByText("close");
    fireEvent.click(closeButton);

    expect(mockCloseModal).toHaveBeenCalledWith(false);
    expect(mockRestart).toHaveBeenCalled();
  });
});
