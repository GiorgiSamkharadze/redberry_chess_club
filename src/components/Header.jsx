import styled from "styled-components";

const Container = styled.div`
  background-color: #7025fb;
  width: 923px;
  height: 84px;
`;

const Wrapper = styled.div`
  padding-top: 22px;
  padding-left: 52px;
  display: inline-flex;
`;

const Text = styled.h1`
  color: #fff;
  font-size: 25px;
  font-weight: 900;
`;

const Logo = styled.img`
  padding: 8px;
  height: 18px;
  width: 14px;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={require("../assets/crown.png")} alt="Crown"></Logo>
        <Text>Redberry Knight Cup</Text>
      </Wrapper>
    </Container>
  );
};

export default Header;
