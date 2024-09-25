import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import eye from "@/assets/icons/login-&-register-icons/eye.svg";
import eyeClose from "@/assets/icons/login-&-register-icons/eye-closed.svg";

const SecondaryInput = forwardRef(
  (
    {
      type,
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
      isEye = false
    },
    ref
  ) => {
    
    const [typeKind, setTypeKind] = useState(type)

    const handleType = () => {
      if (typeKind == "password") {
        setTypeKind("text")
      }
      else if (typeKind == "text") {
        setTypeKind("password")
      }
    }

    return (
      <div className="relative">
        {isEye && <Image src={typeKind=="text"? eye : eyeClose} onClick={handleType} className="absolute right-2 top-3" />}
        <input
          type={typeKind}
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
  onChange: PropTypes.func,
  isEye: PropTypes.bool
 }
export default SecondaryInput;