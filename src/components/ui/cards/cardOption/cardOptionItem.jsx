import React from "react";
import CardOption from "./cardOption";

function CardOptionItem({ options, checkAnswer }) {
  return (
    <>
      {options?.map((option) => (
        <CardOption
          key={option}
          optionLabel={option}
          checkAnswer={checkAnswer}
        />
      ))}
    </>
  );
}

export default CardOptionItem;
