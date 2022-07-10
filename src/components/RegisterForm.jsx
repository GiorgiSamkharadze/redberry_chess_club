import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Container = styled.div`
  position: absolute;
  width: 775px;
  height: 304px;
  left: 971px;
  top: 481px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
`;
const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 775px;
  height: 46px;

  border-radius: 4px;
  border: 1px solid #f5f5f5;
  border-bottom-color: rgba(185, 180, 196, 0.3);
  background: #f5f5f5;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.125);
`;

const Input = styled.input`
  width: 698px;
  height: 30px;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  border: none;
  background: #f5f5f5;
  color: #212529;

  &:hover {
    cursor: pointer;
    background: #E9E9E9;
  }

  &:focus {
    border: none;
    background: #E9ECEF;
  }
  
  &:placeholder::before {
    content: '*'
    color: red;
  }
`;

const ErrorCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 350px;
  height: 87px;
  left: 1531px;
  top: 226px;
  background: rgba(255, 255, 255, 0.85);

  border: 1px solid rgba(0, 0, 0, 0.1);

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const ErrorIcon = styled.img`
  margin: 9.5px 8px 9.5px 12px;
  width: 20px;
  height: 20px;
`;

const ErrorText = styled.h6`
  width: 272px;
  height: 21px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  padding-top: 9px;
  color: #dc3545;
`;

const ErrorCardUpRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ErrorExitIcon = styled.img`
  margin: 14.5px;
  width: 10px;
  height: 10px;
`;

const ValidInputIcon = styled.img`
  margin: 13px 20px;
  width: 20px;
  width: 20px
  background: #3baf77;
`;

const ErrorCardBorder = styled.div`
  width: 350px;
  height: 0px;

  opacity: 0.05;

  border: 1px solid #000000;
`;

const ErrorCardDownRow = styled.div`
  width: 326px;
  height: 24px;

  margin: 12px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #212529;
`;

const getFormValues = () => {
  const storedValues = localStorage.getItem("form");
  if (!storedValues)
    return {
      name: "",
      email: "",
      phone: "",
      date_of_birth: "",
      experience_level: "",
      already_participated: "",
      character_id: "",
    };
  return JSON.parse(storedValues);
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const [values, setValues] = useState(getFormValues);
  // console.log(values);
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(values));
  }, [values]);

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (data) => {
    // console.log(data);
  };

  // console.log(errors);

  const ErrorInputs = [errors.name, errors.email, errors.phone, errors.date];
  // console.log(ErrorInputs);
  const FindInputError = ErrorInputs.find(function (errorInput) {
    return errorInput !== undefined;
  });
  // console.log(FindInputError);

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputLine>
            <Input
              type="text"
              placeholder="Name *"
              name="name"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /(?=(.*[a-zA-Z]){2})/,
                  message: "Please enter valid name",
                },
              })}
              onBlur={() => {
                trigger("name");
              }}
              onChange={handleChange}
              value={values.name}
            />
            {errors.name === undefined && values.name !== "" && (
              <ValidInputIcon src={require("../assets/validInputIcon.png")} />
            )}
          </InputLine>
          <InputLine>
            <Input
              type="email"
              placeholder="Email adress *"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /(\W|^)[\w.+\-]*@redberry\.com(\W|$)/,
                  message: "Please enter valid email address",
                },
              })}
              onBlur={() => {
                trigger("email");
              }}
              onChange={handleChange}
              value={values.email}
            />
            {errors.email === undefined && values.email !== "" && (
              <ValidInputIcon src={require("../assets/validInputIcon.png")} />
            )}
          </InputLine>
          <InputLine>
            <Input
              type="number"
              placeholder="Phone number *"
              name="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{9}$/,
                  message: "Please enter valid phone number",
                },
              })}
              onBlur={() => {
                trigger("phone");
              }}
              onChange={handleChange}
              value={values.phone}
            />
            {errors.phone === undefined && values.phone !== "" && (
              <ValidInputIcon src={require("../assets/validInputIcon.png")} />
            )}
          </InputLine>
          <InputLine>
            <Input
              placeholder="Date of birth *"
              name="date"
              {...register("date", { required: "Date of birth is required" })}
              onBlur={() => {
                trigger("date");
              }}
              onChange={handleChange}
              value={values.date}
            />
            {errors.date === undefined && values.date !== "" && (
              <ValidInputIcon src={require("../assets/validInputIcon.png")} />
            )}
          </InputLine>
          <button type="submit">Hi</button>
        </Form>
      </Container>
      {(errors.name || errors.email || errors.phone || errors.date) && (
        <ErrorCard>
          <ErrorCardUpRow>
            <ErrorIcon src={require("../assets/errorIcon.png")} />
            <ErrorText>{FindInputError.message}</ErrorText>
            <ErrorExitIcon src={require("../assets/exitIcon.png")} />
          </ErrorCardUpRow>
          <ErrorCardDownRow>{FindInputError.message}</ErrorCardDownRow>
          <ErrorCardBorder />
        </ErrorCard>
      )}
    </div>
  );
};

export default RegisterForm;
