import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoToRegButton, LogInButton, LogInHeader, LogInPageContainer } from './styled/LogIn.styled';
import { Field, Form, Formik } from 'formik';


function LoginPage({setUser}) {
  const navigate = useNavigate();

  const findUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      return users.find((user) => user.email === email && user.password === password);
    }
  }

  const handleLogin = (inpEmail, inpPassword) => {
    const current = findUser(inpEmail, inpPassword);
    if (current) {
      localStorage.setItem('user', JSON.stringify(current));
      setUser(current);
      navigate('/');
    } else {
      alert("Bad Credentials");
    }
  };

  const checkEmail = (email) => {
    const regex = /^[\w\.]+@[a-z]+\.[a-z]+$/;

    return email.match(regex);
  };

  return (
    <LogInPageContainer>
      <LogInHeader>LogIn</LogInHeader>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            if (checkEmail(values.email)) {
              handleLogin(values.email, values.password);
            } else {
              alert("Wrong email pattern");
            }
          }}
        >
          {({ isValid }) => ( 
            <Form>
              <Field name="email" placeholder="example@gmail.com" type="text" maxlength="22" style={{
                border: '2px solid', borderRadius: '12px', padding: '10px', marginRight: '20px'
              }} />
              <Field name="password" placeholder="password" type="password" maxlength="22" style={{
                border: '2px solid', borderRadius: '12px', padding: '10px', marginRight: '20px'
              }} />
              <LogInButton type='submit' disabled={!isValid}>Login</LogInButton>
            </Form>
          )}
        </Formik>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <GoToRegButton onClick={() => navigate('/register')}>Go to Register</GoToRegButton>
      </div>
    </LogInPageContainer>
  );
};

export default LoginPage;