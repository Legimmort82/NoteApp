import { FormProvider } from "react-hook-form";
import PropTypes from "prop-types";

const Form = ({ methods, className, onSubmit, children }) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  methods: PropTypes.object,
};
export default Form;
