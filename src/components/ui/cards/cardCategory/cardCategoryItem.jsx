
import CardCategory from "./cardCategory";

function CardCategoryItem({ categories, difficultyType, numberOfQuestions }) {
  return (
    <>
      {categories.map((category) => (
        <CardCategory
          difficultyType={difficultyType}
          key={category.id}
          id={category.id}
          name={category.name}
          numberOfQuestions={numberOfQuestions}
        />
      ))}
    </>
  );
}

export default CardCategoryItem;
