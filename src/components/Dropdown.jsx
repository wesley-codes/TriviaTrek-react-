"use client";


export default function DropDown({ onChange, options }) {
  const handleOptionClick = (option) => {
    onChange(option.target.value);
  };

  return (
    <div className="relative">
      <select
        onChange={handleOptionClick}
        className="border border-3 border-black outline-none rounded py-2 px-4 focus:border-none hover:bg-gray-100 w-24"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
