// bg-Primary-800 px-8 py-2 rounded-lg text-white font-medium mt-3
import Styles from'./button.module.css'
import PropTypes from "prop-types";

function Button({ children, onClick, type, disabled }) {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={`bg-Primary-800 px-8 py-2 rounded-lg text-white font-medium mt-3 w-full ${Styles.button}`}
        onClick={onClick}
      >
        {children}
      </button>

    </>
  );
}
Button.propTypes ={
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children:PropTypes.string
 }

export default Button;
