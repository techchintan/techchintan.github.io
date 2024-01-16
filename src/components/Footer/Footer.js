import { FaGooglePlusG } from "react-icons/fa";
import { Menu, Item as MenuItem } from "components/Menu";
import { Container } from "components/Container";
import { useOnClickEmail } from "hooks/useOnClickEmail";
import { config } from "utils/config";

import "./Footer.scss";

export function Footer() {
  const onClickEmail = useOnClickEmail();

  return (
    <footer className="footer">
      <Container className="footer__inner">
        <Menu>
          {config.footerLinks.map((item, index) => {
            return (
              <MenuItem
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                title={item.label}
              >
                {item.icon}
              </MenuItem>
            );
          })}
          <MenuItem
            href={`mailto:${config.emailAddress}`}
            aria-label="gmail.com"
            title="gmail.com"
            onClick={onClickEmail}
            active
          >
            <FaGooglePlusG />
          </MenuItem>
        </Menu>
      </Container>
    </footer>
  );
}
