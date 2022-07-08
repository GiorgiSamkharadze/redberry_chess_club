import styled from "styled-components";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

const Image = styled.img`
  position: relative;
  height: 996px;
  width: 923px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 1080px;
  width: 1920px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Quote = styled.h1`
  position: absolute;
  width: 423px;
  height: 83px;
  left: 132px;
  top: 295px;

  font-family: "Nunito", sans-serif;
  font-style: italic;
  font-weight: 800;
  font-size: 26px;
  line-height: 35px;
  text-transform: uppercase;

  color: #212529;
`;

const Author = styled.h1`
  position: absolute;
  width: 222px;
  height: 33px;
  left: 132px;
  top: 402px;

  font-family: "Nunito", sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;

  text-transform: uppercase;

  color: #e5e6e8;
`;

const Border = styled.div`
  position: absolute;
  width: 999px;
  height: 0px;
  left: 923px;
  top: 84px;

  border: 1px solid rgba(185, 180, 196, 0.3);
`;

const Text = styled.h2`
  position: absolute;
  width: 215px;
  height: 24px;
  left: 971px;
  top: 30px;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  text-transform: capitalize;

  color: #212529;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex- direction: row;
  width: 366px;
  height: 65px;
  left: 971px;
  top: 144px;
`;

const SquareOne = styled.div`
  margin-left: 59px;
  width: 40px;
  height: 40px;

  background: #ffffff;
  border: 1px solid #e5e6e8;
  border-radius: 8px;
`;

const TextOne = styled.div`
  position: absolute;
  width: 158px;
  height: 24px;
  left: 0px;
  top: 44px;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #000000;
`;

const SquareTwo = styled.div`
  margin-left: 182px;
  width: 40px;
  height: 40px;

  background: #f1f1f1;
  border: 1px solid #e5e6e8;
  border-radius: 8px;
`;

const TextTwo = styled.div`
  position: absolute;
  width: 131px;
  height: 24px;
  left: 235px;
  top: 44px;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #000000;
`;
const NumberOne = styled.div`
  position: relative;
  width: 11px;
  height: 25px;
  left: 14px;
  top: 8px;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #212529;
`;

const NumberTwo = styled.div`
  position: relative;
  width: 11px;
  height: 25px;
  left: 14px;
  top: 8px;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  color: #95939a;
`;

const Line = styled.div`
  position: absolute;
  margin-top: 20px;
  margin-left: 103px;
  width: 174px;
  height: 0px;

  border: 1px solid rgba(185, 180, 196, 0.3);
`;

const TxtOne = styled.div`
  position: absolute;
  width: 328px;
  height: 48px;
  left: 971px;
  top: 324px;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;

  color: #000000;
`;

const TxtTwo = styled.div`
  position: absolute;
  width: 205px;
  height: 21px;
  left: 971px;
  top: 375px;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;

  text-transform: capitalize;

  color: #95939a;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <div>
        <Header />
        <Image
          src={require("../assets/chessFigures.png")}
          alt={"Chess Board"}
        ></Image>
        <Quote>“When you see a good move, look for a better one.”</Quote>
        <Author>-Emanuel Lasker</Author>
      </div>
      <div>
        <Text>Start creating your account</Text>
        <Border></Border>
        <Wrapper>
          <SquareOne>
            <NumberOne>1</NumberOne>
          </SquareOne>
          <TextOne>Personal information</TextOne>
          <Line />
          <SquareTwo>
            <NumberTwo>2</NumberTwo>
          </SquareTwo>
          <TextTwo>Chess experience</TextTwo>
        </Wrapper>
        <TxtOne>Personal information</TxtOne>
        <TxtTwo>This is basic informaton fields</TxtTwo>
        <RegisterForm />
      </div>
    </Container>
  );
};

export default Register;
