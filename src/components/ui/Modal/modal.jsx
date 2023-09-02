import React from "react";
import Button from "../Button";

function Modal({ score, closeModal, restart }) {
  const closeModalHandler = () => {
    closeModal(false);
    restart();
  };

  return (
    <div className="bg-gray-400 flex justify-center items-center h-screen  absolute inset-0 bg-opacity-25">
      <div className="fixed inset-0 flex justify-center items-center z-50 p-4 ">
        <div className="bg-white h-[300px] w-full md:w-[50%] p-6 rounded-lg shadow-lg bg-opacity-[100]  flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4">Your score</h2>
          <p>{score}</p>
          <Button onclickHandler={closeModalHandler} label="close" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
