import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const SelectOne = styled.select`
  position: absolute;
  width: 392px;
  height: 46px;
  left: 961px;
  top: 491px;
  background-color: #f5f5f5;
`;

const SelectTwo = styled.select`
  position: absolute;
  width: 392px;
  height: 46px;
  left: 1376px;
  top: 491px;
  background-color: #f5f5f5;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 16px;

  position: absolute;
  width: 775px;
  height: 46px;
  left: 960px;
  top: 617px;
  background: #f5f5f5;
  border-radius: 4px;
`;

const InputOne = styled.input`
  position: absolute;
  left: 976px;
  top: 675px;
`;

const InputTwo = styled.input`
  position: absolute;
  left: 1050px;
  top: 675px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

const Question = styled.h1`
  position: absolute;
  width: 743px;
  height: 30px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  background: #f5f5f5;
  color: #212529;
`;

const TextOne = styled.h1`
  position: absolute;
  left: 1008px;
  top: 668px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212529;
`;

const TextTwo = styled.h1`
  position: absolute;
  left: 1070px;
  top: 668px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212529;
`;

const RegisterExperienceForm = () => {
  const [chessPlayers, setState] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://chess-tournament-api.devtest.ge/api/grandmasters"
      );
      const newData = await response.json();
      setState(newData);
    };

    fetchData();
  });

  return (
    <div>
      <form>
        <SelectOne>
          <option>level of knowledge *</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Professional">Professional</option>
        </SelectOne>
        <SelectTwo>
          <option>Choose your character *</option>
          {/* {chessPlayers.map((player) => (
            <option value={player.name}>{player.name}</option>
          ))} */}
          <option>Nona Gaphrindashvili</option>
          <option>Mikhail Tal</option>
          <option>Bobby Fischer</option>
          <option>Bobby Fisher</option>
        </SelectTwo>
        <Wrapper>
          <Question>
            Have you participated in the Redberry Championship? *
          </Question>
        </Wrapper>
        <Wrap>
          <InputOne type="radio" id="yes" name="true" value="true" />
          <TextOne>Yes</TextOne>
          <InputTwo type="radio" id="yes" name="false" value="false" />
          <TextTwo>No</TextTwo>
        </Wrap>
      </form>
    </div>
  );
};

export default RegisterExperienceForm;
