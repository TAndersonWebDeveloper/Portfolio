import { useState } from "react";
import styled, { keyframes } from "styled-components";
import tyler from "../../assets/tyler.JPG";

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  /* background: rgb(0, 8, 20);
  background: linear-gradient(
    90deg,
    rgba(0, 8, 20, 1) 0%,
    rgba(0, 29, 61, 1) 50%
  ); */
  color: white;
`;

const fadeIn = keyframes`

  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  animation: ${fadeIn} 1.5s ease-in-out;

  padding-left: 20px;
  height: 175px;
`;

const Title = styled.h1`
  font-size: 5rem;
  padding-bottom: 20px;
  padding-left: 20px;
  border-left: 5px solid white;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Name = styled.span`
  color: #02c39a;
`;

const Subtitle = styled.h2`
  font-size: 3rem;
  animation: ${fadeIn} 1.5s ease-in-out;
  border-left: 5px solid white;
  padding-left: 20px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
  filter: drop-shadow(2px 2px 9px #4cc9f0);

  animation: ${fadeIn} 1s ease-in-out;
`;
const Image = styled.img`
  width: 400px;
  border-radius: 50%;
`;

const ButtonsWrapper = styled.div`
  display: flex;

  border-left: 5px solid white;

  padding-top: 20px;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const Button = styled.button`
  background-color: transparent;
  /* border: 1px solid #02c39a; */
  border: none;
  color: #02c39a;
  width: 100px;
  padding: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #02c39a;
    color: white;
    transition: all 0.3s ease-in-out;
  }
`;

const Hero = () => {
  const [show, setShow] = useState(false);
  const [titleShow, setTitleShow] = useState(false);
  const [buttonShow, setButtonShow] = useState(false);
  setTimeout(() => {
    setTitleShow(true);
  }, 1000);

  setTimeout(() => {
    setShow(true);
  }, 2000);

  setTimeout(() => {
    setButtonShow(true);
  }, 3000);
  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          {titleShow && (
            <Title>
              Hi, I'm<Name> Tyler</Name>.
            </Title>
          )}

          {show && <Subtitle>I'm a full-stack web developer.</Subtitle>}
          {buttonShow && (
            <ButtonsWrapper>
              <Button>Skills</Button>
              <Button>Projects</Button>
              <Button>About</Button>
              <Button>Contact</Button>
            </ButtonsWrapper>
          )}
        </TextWrapper>
        {titleShow && (
          <ImageWrapper>
            <Image src={tyler} alt="picture of tyler" />
          </ImageWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default Hero;
