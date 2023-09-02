function CardOption({ optionLabel, checkAnswer }) {
  const handleOptionClick = (option) => {
    checkAnswer(option);
  };

  return (
    <div
      className={`bg-white rounded-lg p-4 shadow-md  py-4 w-full cursor-pointer `}
      onClick={() => handleOptionClick(optionLabel)}
    >
      <p className="text-base"> {optionLabel}</p>
    </div>
  );
}

export default CardOption;
