import { forwardRef, useState } from "react";
import PropTypes from "prop-types";

const PrimaryInput = forwardRef(
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
    const [focus, setFocus] = useState(false)

    const handleFocus = (e) => {
      setFocus(true)

    };

    const handleBlur = (e) => {
      setFocus(false)
    };
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
          className={`bg-Primary-100 px-2 outline-none w-full border-b-[5px] h-11 border-b-Primary-600 placeholder:text-[30px] pb-3 text-[30px] font-semibold dark:bg-dark-300 dark:text-white duration-200 hover:shadow-md hover:shadow-gray-400 ${
            focus ? "scale-[1.02]" : ""
          }`}
        />
        {error && <p className="mt-[5px] text-xs text-State-error">{error}</p>}
      </div>
    );
  }
);

export default PrimaryInput;
PrimaryInput.propTypes ={
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
 }
