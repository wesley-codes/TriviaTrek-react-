import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { getQuestion } from "../../utils/Requests";
import "@testing-library/jest-dom/extend-expect";
import TriviaTrek from "../TriviaTrek";
import { MemoryRouter } from "react-router-dom";
import { randomizeArray } from "../../utils/data";

describe("Trivia Page", () => {
  fetchMock.enableMocks();

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("randomizeArray shuffles an array", () => {
    // Input array
    const inputArray = [1, 2, 3, 4, 5];

    const shuffledArray = randomizeArray(inputArray.slice());

    expect(shuffledArray).not.toEqual(inputArray);

    expect(shuffledArray.sort()).toEqual(inputArray.sort());
  });

  it("fetches data", async () => {
    const mockApiResponse = {
      results: [
        {
          question: "Question 1",
          correct_answer: "Correct Answer",
          incorrect_answers: ["Incorrect Answer 1", "Incorrect Answer 2"],
        },
      ],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockApiResponse));

    const mockData = {
      category: "1",
      difficulty: "easy",
      numberOfQuestions: "2",
    };

    const result = await getQuestion(
      mockData.category,
      mockData.difficulty,
      mockData.numberOfQuestions
    );

    const dataToExpect = [
      {
        question: "Question 1",
        correct_answer: "Correct Answer",
        incorrect_answers: ["Incorrect Answer 1", "Incorrect Answer 2"],
        allOptions: expect.arrayContaining([
          "Correct Answer",
          "Incorrect Answer 1",
          "Incorrect Answer 2",
        ]),
      },
    ];

    expect(result).toEqual(dataToExpect);
  });

  it("handles error ", async () => {
    const mockData = {
      category: "1",
      difficulty: "easy",
      numberOfQuestions: "4",
    };

    fetchMock.mockReject(new Error("wrong API"));

    try {
      await getQuestion(
        mockData.category,
        mockData.difficulty,
        mockData.numberOfQuestions
      );
    } catch (error) {
      expect(error.message).toBe("Could not load questions");
    }
  });
});
