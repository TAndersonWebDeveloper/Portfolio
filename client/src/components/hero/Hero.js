import styled from "styled-components";
import tyler from "../../assets/tyler.JPG";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: rgb(163, 163, 224);
  background: linear-gradient(
    158deg,
    rgba(163, 163, 224, 1) 35%,
    rgba(234, 246, 249, 1) 100%
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
  color: #00235b;
`;

const Subtitle = styled.h2`
  font-size: 3rem;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
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
