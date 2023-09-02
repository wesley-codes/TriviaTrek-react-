import { useState, useEffect } from "react";
import { fetchCategory } from "../utils/Requests";
import DropDown from "../components/Dropdown";
import { numOfQuestions, options } from "../utils/data";
import CardCategoryItem from "../components/ui/cards/cardCategory/cardCategoryItem";

export default function Home() {
  const [difficulty, setDifficulty] = useState("easy");
  const [numOfQuestion, setNumOfQuestion] = useState("10");

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await fetchCategory();
        setCategories(data.trivia_categories);
        setIsLoading(false);
      } catch (error) {
        throw new Error("Could not get categories");
      }
    }

    fetchCategories();
  }, []);

  const selectHandler = (value) => {
    setDifficulty(value);
  };

  const selectNumOfQuestion = (value) => {
    setNumOfQuestion(value);
  };
  return (
    <main className="flex  mt-[4rem] md:mt-0 flex-col items-center p-6  md:p-24">
      <h1 className="md:text-2xl font-medium 	"> Welcome to TriviaTrek</h1>
      <h2 className="md:text-2xl font-medium 	"> Pick a Category</h2>
      <section className="container mx-auto py-8">
        {isLoading ? (
          <div className="flex w-full justify-center items-center mt-6">
            <img
              src="/assets/loading.gif"
              alt="loading"
              width={50}
              height={50}
            />
          </div>
        ) : (
          <>
            <div className="flex flex-col  md:flex-row  md:justify-around  gap-4 ">
              <DropDown onChange={selectHandler} options={options} label="Select difficulty" />
              <DropDown
                onChange={selectNumOfQuestion}
                options={numOfQuestions}
                label="Num of questions"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              <CardCategoryItem
                difficultyType={difficulty}
                categories={categories}
                numberOfQuestions={numOfQuestion}
              />
            </div>
          </>
        )}
      </section>
    </main>
  );
}
