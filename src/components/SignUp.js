import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Form, Button, Container, Header, Segment } from "semantic-ui-react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.username) {
      errors.username = "Username is required";
    }
    if (!value.email) {
      errors.email = "Email is required";
    } else if (!regex.test(value.email)) {
      errors.email = "Enter valid email";
    }
    if (!value.password) {
      errors.password = "Password is required";
    } else if (value.password.length < 4) {
      errors.password = "Password is too short less than 4 characters";
    } else if (value.password.length > 10) {
      errors.password = "Password is too long more than 10 characters";
    }
    return errors;
  };

  return (
    <Container text>
      <Segment raised color="blue">
        <Header as="h2">Sign Up</Header>

        <Form onSubmit={handleSubmit}>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <>
              <p>Signed up successfully</p>
              <Navigate to={"/"} />
            </>
          )}
          <Form.Field>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </Form.Field>
          <p>{formErrors.username}</p>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Field>
          <p>{formErrors.email}</p>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Field>
          <p>{formErrors.password}</p>
          <Button primary type="submit">
            Sign Up
          </Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default SignupForm;
