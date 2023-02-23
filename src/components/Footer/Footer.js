import { ImStackoverflow, ImGithub } from "react-icons/im";
import { GrSkype } from "react-icons/gr";
import { SiUpwork } from "react-icons/si";
import {
  FaLinkedinIn,
  FaTwitter,
  FaMediumM,
  FaGooglePlusG,
} from "react-icons/fa";

import { Menu, Item as MenuItem } from "components/Menu";
import { Container } from "components/Container";
import { useOnClickEmail } from "hooks/useOnClickEmail";
import "./Footer.scss";

export function Footer() {
  const onClickEmail = useOnClickEmail();

  return (
    <footer className="footer">
      <Container className="footer__inner">
        <Menu>
          <MenuItem
            href="https://www.linkedin.com/in/techchintan/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin.com"
            title="linkedin.com"
          >
            <FaLinkedinIn />
          </MenuItem>

          <MenuItem
            href="https://github.com/techchintan"
            target="_blank"
            rel="noreferrer"
            aria-label="github.com"
            title="github.com"
          >
            <ImGithub />
          </MenuItem>

          <MenuItem
            href="mailto:csudani7@gmail.com"
            aria-label="gmail.com"
            title="gmail.com"
            onClick={onClickEmail}
            active
          >
            <FaGooglePlusG />
          </MenuItem>

          <MenuItem
            href="https://www.upwork.com/freelancers/techchintan"
            target="_blank"
            rel="noreferrer"
            aria-label="upwork.com"
            title="upwork.com"
          >
            <SiUpwork />
          </MenuItem>

          <MenuItem
            href="https://stackoverflow.com/users/13493633/techchintan?tab=profile"
            target="_blank"
            rel="noreferrer"
            aria-label="stackoverflow.com"
            title="stackoverflow.com"
          >
            <ImStackoverflow />
          </MenuItem>

          <MenuItem
            href="https://techchintan.medium.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="medium.com"
            title="medium.com"
          >
            <FaMediumM />
          </MenuItem>

          <MenuItem
            href="https://join.skype.com/invite/YHF6tNWb70hH"
            target="_blank"
            rel="noreferrer"
            aria-label="skype.com"
            title="skype.com"
          >
            <GrSkype />
          </MenuItem>

          <MenuItem
            href="https://twitter.com/techchintan"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter.com"
            title="twitter.com"
          >
            <FaTwitter />
          </MenuItem>
        </Menu>
      </Container>
    </footer>
  );
}
