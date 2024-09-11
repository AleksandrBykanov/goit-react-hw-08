import css from "./RegistrationPage.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  email: Yup.string()
  .email("Incorrectly entered email")
  .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const profile = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(apiRegister(profile))
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name:
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label} htmlFor="email">
          Email:
          <Field
            className={css.field}
            type="text"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label} htmlFor="password">
          Password:
          <Field
            className={css.field}
            type="password"
            name="password"
            placeholder="Create password"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button className={css.btn} type="submit">
        Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
