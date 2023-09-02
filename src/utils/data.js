export function randomizeArray(arr) {
  //return a copy of the arr ansd sort it
  return arr?.slice().sort(() => Math.random() - 0.5);
}

export const options = [
  { label: "Easy", value: "easy" },
  { label: "Meduim", value: "meduim" },
  { label: "Hard", value: "hard" },
];

export const numOfQuestions = [
  {
    label: "10",
    value: "10",
  },
  {
    label: "9",
    value: "9",
  },
  {
    label: "8",
    value: "8",
  },
  {
    label: "7",
    value: "7",
  },
  {
    label: "6",
    value: "6",
  },
  {
    label: "5",
    value: "5",
  },
  {
    label: "4",
    value: "4",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "2",
    value: "2",
  },

  {
    label: "1",
    value: "1",
  },
];
