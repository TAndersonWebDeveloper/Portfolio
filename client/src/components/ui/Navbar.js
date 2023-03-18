import styled, { keyframes } from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useState } from "react";
const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
`;

const fromTop = keyframes`
from {
  opacity: 0;
  transform: translateY(-100%);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

const LinksList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 10%;
  margin-right: 2rem;
  animation: ${fromTop} 1.5s ease-in-out;
`;

const LinkItem = styled.li`
  font-size: 2rem;
`;

const StyledLink = styled.a``;

const Navbar = () => {
  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(true);
  }, 2000);

  return (
    <Container>
      {show && (
        <LinksList>
          <LinkItem>
            <StyledLink
              href="https://www.linkedin.com/in/tyler-anderson-74766722b/"
              target="_blank"
            >
              <AiFillLinkedin className="linkedin" />
            </StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink
              href="https://github.com/TAndersonWebDeveloper"
              target="_blank"
            >
              <AiFillGithub className="github" />
            </StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink
              href="https://github.com/TAndersonWebDeveloper"
              target="_blank"
            >
              <HiOutlineDocumentText className="resume" />
            </StyledLink>
          </LinkItem>
        </LinksList>
      )}
    </Container>
  );
};

export default Navbar;
