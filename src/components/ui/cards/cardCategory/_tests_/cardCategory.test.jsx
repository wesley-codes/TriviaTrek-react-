import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CardCategory from "../cardCategory";

describe("CardCategory Component", () => {
  it("renders the category name", () => {
    const props = {
      name: "Test Category",
      id: "1",
      difficultyType: "easy",
      numberOfQuestions: 10,
    };

    render(
      <Router>
        <CardCategory
          name={props.name}
          id={props.id}
          difficultyType={props.difficultyType}
          numberOfQuestions={props.numberOfQuestions}
        />
      </Router>
    );

    const categoryNameElement = screen.getByText(props.name);
    expect(categoryNameElement).toBeInTheDocument();

    const linkElement = screen.getByRole("link", { name: props.name });
    expect(linkElement).toHaveAttribute(
      "href",
      `/triviaTrek/${props.id}?difficulty=${props.difficultyType}&number=${props.numberOfQuestions}`
    );
  });
});
