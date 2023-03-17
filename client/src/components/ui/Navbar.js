import styled from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
`;

const LinksList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 10%;
  margin-right: 2rem;
`;

const LinkItem = styled.li`
  font-size: 2rem;
`;

const StyledLink = styled.a``;

const Navbar = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Navbar;
