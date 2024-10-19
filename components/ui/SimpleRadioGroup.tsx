import React from "react";
type SimpleRadioGroupProps = {
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  setValue: (value: string) => void;
};

const SimpleRadioGroup = ({
  options,
  value,
  setValue,
}: SimpleRadioGroupProps) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="alignment"
            value={option.value}
            checked={value === option.value}
            onChange={() => setValue(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default SimpleRadioGroup;
