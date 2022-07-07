import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Image = styled.img`
  height: 996px;
  width: 923px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 1080px;
  width: 1920px;
  background-color: #fd5334;
`;

const TextFirstLine = styled.h1`
  position: absolute;
  width: 496px;
  height: 109px;
  left: 1008px;
  top: 265px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 80px;
  line-height: 109px;
  text-transform: uppercase;
  color: #fff;
`;

const TextSecondLine = styled.h1`
  position: absolute;
  width: 570px;
  height: 109px;
  left: 1008px;
  top: 390px;

  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 109px;
  text-transform: uppercase;

  color: #ffffff;
`;

const SmallFontText = styled.h3`
  position: absolute;
  width: 136px;
  height: 27px;
  left: 1530px;
  top: 306px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;

  color: #212529;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 13px 24px;
  gap: 10px;

  position: absolute;
  width: 191px;
  height: 53px;
  left: 1008px;
  top: 601px;
  cursor: pointer;
  background: #212529;
  border-radius: 8px;
  &:hover {
    border: 4px solid #c2a5f9cc;
  }
`;

const BtnText = styled.div`
  posiyion: fixed;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-transform: capitalize;
  color: #ffffff;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Home = () => {
  return (
    <Container>
      <div>
        <Header />
        <Image src={require("../assets/chess.png")}></Image>
      </div>
      <div>
        <TextFirstLine>Chess says</TextFirstLine>
        <TextSecondLine>Who we are</TextSecondLine>
        <SmallFontText>A lot about</SmallFontText>
        <Button>
          <BtnText>Get Started</BtnText>
          <Icon src={require("../assets/arrow.png")}></Icon>
        </Button>
      </div>
    </Container>
  );
};

export default Home;
