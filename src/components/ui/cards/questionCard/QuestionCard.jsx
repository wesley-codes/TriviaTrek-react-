import React from "react";

function QuestionCard({ question }) {
  return (
    <div className="flex items-center justify-center rounded-lg p-4 shadow-md w-full  md:w-1/2  h-40">
      {question === undefined ? (
        <h2 className="text-lg md:text-2xl text-center  font-semibold ">
          No question found
        </h2>
      ) : (
        <h2 className="text-lg md:text-lg text-center  font-semibold ">
          {" "}
          {question}
        </h2>
      )}
    </div>
  );
}

export default QuestionCard;
