import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { fetchCategory } from "../../utils/Requests";
import "@testing-library/jest-dom/extend-expect";
describe("category page", () => {
  fetchMock.enableMocks();

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches data", async () => {
    const mockData = {
      trivia_categories: [
        {
          id: 9,
          name: "General Knowledge",
        },
      ],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const result = await fetchCategory();
    expect(result).toEqual(mockData);
  });

  it("handles error ", async () => {
    fetchMock.mockReject(new Error("wrong API"));

    try {
      await fetchCategory();
    } catch (error) {
      expect(error.message).toBe("Could not get categories");
    }
  });
})
