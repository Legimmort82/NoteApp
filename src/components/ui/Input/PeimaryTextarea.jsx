import { forwardRef, useState } from "react";

const PrimaryTextarea = forwardRef(
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
      onFocus,
      onBlur
    },
    ref
  ) => {

    const [focus, setFocus] = useState(false)

    const handleFocus = (e) => {
      setFocus(true)

    };

    const handleBlur = (e) => {
      setFocus(false)
    };
    return (
      <div>
        <textarea
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
          className={`bg-Primary-100 resize-none text-[24px] rounded-lg border-[3px] w-[100%] h-[500px] lg:h-[400px] border-Primary-500 border-solid placeholder:text-gray-400  placeholder:font-medium p-4 dark:bg-dark-300 dark:text-white ${
            focus ? "duration-200 outline-none shadow-lg shadow-gray-500" : ""
          }`}
          />
        {error && <p className="mt-[5px] text-xs text-State-error">{error}</p>}
      </div>
    );
  }
);

export default PrimaryTextarea;
