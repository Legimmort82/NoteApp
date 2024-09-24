import { forwardRef, useState } from "react";
import PropTypes from "prop-types";

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
    },
    ref
  ) => {

    const [focus, setFocus] = useState(false)

    const handleFocus = () => {
      setFocus(true)
    };

    const handleBlur = () => {
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
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

export default PrimaryTextarea;
PrimaryTextarea.propTypes ={
  type: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
 }