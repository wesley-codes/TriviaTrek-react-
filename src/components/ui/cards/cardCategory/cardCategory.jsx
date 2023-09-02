import { Link } from "react-router-dom";

function CardCategory({ name, id, difficultyType, numberOfQuestions }) {
  return (
    <Link
      to={`/triviaTrek/${id}?difficulty=${difficultyType}&number=${numberOfQuestions}`}
    >
      <div className="bg-white rounded-lg  shadow-md  h-32  px-4 flex justify-center items-center  ">
        <h2 className="text-[15px] md:text-lg font-semibold ">{name}</h2>
      </div>
    </Link>
  );
}

export default CardCategory;
