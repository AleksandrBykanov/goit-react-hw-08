import css from './LoginPage.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { apiLogin } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
  .email("Incorrectly entered email")
  .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError)

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values))
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form}>
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
        {error && <p className={css.errorText}>Incorrect login or password {error}</p>}
        <button className={css.btn} type="submit">
        Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
