import { randomizeArray } from "./data";

export async function fetchCategory() {
  try {
    const res = await fetch("https://opentdb.com/api_category.php", {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("something went wrong");
    }

    return res.json();
  } catch (error) {
    
    throw new Error(error.message);
  }
}

export async function getQuestion(category, difficulty, number) {
  try {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`,
      {
        cache: "no-cache",
      }
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();

    return data.results.map((quest) => ({
      ...quest,
      allOptions: randomizeArray([
        quest.correct_answer,
        ...quest.incorrect_answers,
      ]),
    }));
  } catch (error) {
    throw new Error(error.message);
  }
}
