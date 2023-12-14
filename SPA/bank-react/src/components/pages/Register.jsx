import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoToLogButton, RegButton, RegHeader, RegisterPageContainer } from './styled/Register.styled';


function RegisterPage({setUser}) {

  const navigate = useNavigate();

  // localStorage.removeItem('user');
  // localStorage.removeItem('users');

  const findUser = (email) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      return users.find((user) => user.email === email);
    }
  }

  const handleRegister = (inpEmail, inpPassword) => {
    if (inpEmail === "" || inpPassword === "") {
      alert("Fill the fields");
      return;
    }
    const existing = findUser(inpEmail);
    if (!existing) {
      const users = JSON.parse(localStorage.getItem('users'));
      if (users) {
        users.push({email: inpEmail, password: inpPassword});
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('user', JSON.stringify({email: inpEmail, password: inpPassword}));
        setUser({email: inpEmail, password: inpPassword});
        navigate('/');
      } else {
        localStorage.setItem('users', JSON.stringify([{email: inpEmail, password: inpPassword}]));
        localStorage.setItem('user', JSON.stringify({email: inpEmail, password: inpPassword}));
        setUser({email: inpEmail, password: inpPassword});
        navigate('/');
      }
    } else {
      alert("Account already exists");
    }
  };

  const checkEmail = (email) => {
    const regex = /^[\w\.]+@[a-z]+\.[a-z]+$/;

    return email.match(regex);
  };

  return (
    <RegisterPageContainer>
      <RegHeader>Register</RegHeader>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              if (checkEmail(values.email)) {
                if (values.password.length >= 6) {
                  handleRegister(values.email, values.password);
                } else {
                  alert("Too weak password");
                }
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
              <RegButton type='submit' disabled={!isValid}>Register</RegButton>
            </Form>
          )}
        </Formik>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <GoToLogButton onClick={() => navigate('/login')}>Go to LogIn</GoToLogButton>
      </div>
    </RegisterPageContainer>
  );
};

export default RegisterPage;