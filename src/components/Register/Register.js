import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = ({ theme }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ firstName: '', lastName: '', userName: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    userName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', userName: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        navigate('/');
      }}
    >
      <Form className={theme}>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" onChange={handleChange} />
        <ErrorMessage name="firstName" component="div" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" onChange={handleChange} />
        <ErrorMessage name="lastName" component="div" />

        <label htmlFor="userName">User Name</label>
        <Field name="userName" type="text" onChange={handleChange} />
        <ErrorMessage name="userName" component="div" />

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" onChange={handleChange} />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" onChange={handleChange} />
        <ErrorMessage name="password" component="div" />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field name="confirmPassword" type="password" onChange={handleChange} />
        <ErrorMessage name="confirmPassword" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Register;