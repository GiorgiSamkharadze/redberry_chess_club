import styled from "styled-components";

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

const Input = styled.input`
  width: 775px;
  height: 46px;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  color: #212529;
  background: #f5f5f5;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  border: 1px solid #f5f5f5;
  border-bottom-color: rgba(185, 180, 196, 0.3)
  
  &:hover {
    cursor: pointer;
  }

  ::placeholder, :before {
    content: " *";
    color: red;
}
`;

const RegisterForm = () => {
  return (
    <Container>
      <Form>
        <Input type="text" placeholder="Name *" />
        <Input type="email" placeholder="Email adress *" />
        <Input type="number" placeholder="Phone number *" />
        <Input placeholder="Date of birth *" />
      </Form>
    </Container>
  );
};

export default RegisterForm;
