import React from "react";

type SingleTextInput = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
};

const SingleTextInput = ({
  value,
  onChange,
  label,
  placeholder,
}: SingleTextInput) => {
  return (
    <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
      <label
        htmlFor={label}
        className="block text-xs font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        id={label}
        name={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder={placeholder || ""}
        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default SingleTextInput;
