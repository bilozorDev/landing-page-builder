import React from "react";

interface SimpleRadioGroupProps<T extends string | number> {
  options: Array<{ label: string; value: T }>;
  value: T;
  setValue: (value: T) => void;
}

const SimpleRadioGroup = <T,>({
  options,
  value,
  setValue,
}: SimpleRadioGroupProps<T>) => {
  return (
    <div>
      {options.map((option) => (
        <label key={String(option.value)}>
          <input
            type="radio"
            name="alignment"
            value={String(option.value)}
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
