import React from "react";
import styled from "styled-components";
import { frontend, backend, tools } from "./SkillData";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #044a49;
  justify-content: space-between;
  padding: 0 10%;
  position: relative;
  clip-path: polygon(50% 7%, 100% 0, 100% 100%, 0 100%, 0 0);
`;

const SkillHeader = styled.h2`
  font-size: 3rem;
  color: #fff;
  position: absolute;

  top: 12%;
  left: 50%;
  transform: translateX(-50%);
`;

const CardWraper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(17, 17, 17);
  width: 25%;
  height: 500px;
  position: relative;
`;
const CardItem = styled.div`
  display: flex;
  width: 90%;
  margin-left: 20px;
  justify-content: center;
  font-size: 1.5rem;
  align-items: center;
  margin-bottom: 30px;
`;
const Icon = styled.p`
  color: ${(props) => props.color};
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #02c39a;
`;

const CardTitle = styled.h3`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #02c39a;
`;
const Skill = () => {
  return (
    <Container>
      <SkillHeader>Skills</SkillHeader>
      <CardWraper>
        <Card>
          <CardTitle>Frontend</CardTitle>
          {frontend.map((item, index) => {
            return (
              <CardItem key={index}>
                <Icon color={item.color}>{item.img}</Icon>
                <Title>{item.title}</Title>
              </CardItem>
            );
          })}
        </Card>
        <Card>
          <CardTitle>Backend</CardTitle>
          {backend.map((item, index) => {
            return (
              <CardItem key={index}>
                <Icon color={item.color}>{item.img}</Icon>
                <Title>{item.title}</Title>
              </CardItem>
            );
          })}
        </Card>
        <Card>
          <CardTitle>Tools</CardTitle>
          {tools.map((item, index) => {
            return (
              <CardItem key={index}>
                <Icon color={item.color}>{item.img}</Icon>
                <Title>{item.title}</Title>
              </CardItem>
            );
          })}
        </Card>
      </CardWraper>
    </Container>
  );
};

export default Skill;
