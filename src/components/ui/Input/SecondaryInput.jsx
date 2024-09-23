import { forwardRef } from "react";

const SecondaryInput = forwardRef(
  (
    {
      type = "text",
      value,
      error,
      placeholder,
      name,
      required,
      maxLength,
      minLength,
      min,
      max,
      onChange,
    },
    ref
  ) => {
    const handleFocus = () => {};
    const handleBlur = () => {};
    return (
      <div>
        <input
          type={type}
          required={required}
          name={name}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          minLength={minLength}
          min={min}
          max={max}
          ref={ref}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="rounded-md h-12 w-full bg-white px-4"
          />
        {error && <p className="mt-[5px] text-xs text-State-error">{error}</p>}
      </div>
    );
  }
);

export default SecondaryInput;
