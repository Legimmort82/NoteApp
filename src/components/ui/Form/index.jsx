import { FormProvider } from "react-hook-form";

const Form = ({ methods, className, onSubmit, children }) => {

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
