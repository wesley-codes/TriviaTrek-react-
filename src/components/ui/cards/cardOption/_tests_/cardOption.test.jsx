import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardOption from "../cardOption";

describe("CardOption Component", () => {
  it("should call checkAnswer with the correct argument when clicked", () => {
    const mockCheckAnswer = jest.fn();

    const { getByText } = render(
      <CardOption optionLabel="Usher" checkAnswer={mockCheckAnswer} />
    );

    const optionElement = getByText("Usher");

    fireEvent.click(optionElement);

    expect(mockCheckAnswer).toHaveBeenCalledWith("Usher");
  });
});
