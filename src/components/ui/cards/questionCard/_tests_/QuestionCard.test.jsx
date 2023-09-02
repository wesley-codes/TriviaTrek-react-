import { render } from "@testing-library/react";
import QuestionCard from "../QuestionCard";

describe("QuestionCard Component", () => {
  it("renders properly", () => {
    render(<QuestionCard question="is it a dog?" />);
  });

  it("displays the question", () => {
    const { getByText } = render(<QuestionCard question="is it a dog?" />);
    expect(getByText("is it a dog?")).toBeInTheDocument();
  });


});
