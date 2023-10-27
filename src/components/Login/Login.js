import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ theme }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);
    navigate('/');
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      <Form className={`login-form ${theme}`}>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" onChange={handleChange} />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" onChange={handleChange} />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default Login;