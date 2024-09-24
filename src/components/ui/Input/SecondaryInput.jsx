import { forwardRef } from "react";
import PropTypes from "prop-types";

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
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          className="rounded-md h-12 w-full bg-white px-4"
          />
        {error && <p className="mt-[5px] text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

export default SecondaryInput;
SecondaryInput.propTypes ={
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