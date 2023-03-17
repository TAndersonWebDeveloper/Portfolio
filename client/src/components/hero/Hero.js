import styled from "styled-components";
import tyler from "../../assets/tyler.JPG";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: rgb(0, 8, 20);
  background: linear-gradient(
    169deg,
    rgba(0, 8, 20, 1) 0%,
    rgba(0, 29, 61, 1) 68%
  );
  color: white;
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15%;
`;

const Title = styled.h1`
  font-size: 5rem;
`;

const Name = styled.span`
  color: #ffd60a;
`;

const Subtitle = styled.h2`
  font-size: 3rem;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
  filter: drop-shadow(16px -32px 0px #000);
`;
const Image = styled.img`
  width: 400px;
  border-radius: 50%;
`;

const Hero = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>
          Hi, I'm<Name> Tyler</Name>.
        </Title>
        <Subtitle>I'm a full-stack web developer.</Subtitle>
      </TextWrapper>
      <ImageWrapper>
        <Image src={tyler} alt="picture of tyler" />
      </ImageWrapper>
    </Container>
  );
};

export default Hero;
