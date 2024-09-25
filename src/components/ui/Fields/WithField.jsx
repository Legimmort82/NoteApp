import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const withField = (Comp) => {
  return function Field({ name, required, control, ...props }) {
    const {
      field: { ref, ...field },
      fieldState,
    } = useController({
      name,
      control,
      rules: {
        required: required === true ? "Please enter this field" : required,
      },
    });

    return (
      <Comp
        required={required}
        {...field}
        error={fieldState.error?.message}
        {...props}
      />
    );
  };
};
withField.propTypes = {
  Comp: PropTypes.node,
};

export default withField;
