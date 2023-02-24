import { Helmet } from "react-helmet-async";

import { config } from "utils/config";
import { Link } from "components/Link";
import { useOnClickEmail } from "hooks/useOnClickEmail";
import "./Contact.scss";

export function Contact() {
  const onClickEmail = useOnClickEmail();

  return (
    <>
      <Helmet>
        <title>{config.username} | contact</title>
      </Helmet>

      <section className="contact">
        <h2 className="contact__title">Let's work together.</h2>

        <p>
          {config.contactText}&nbsp;
          <Link
            isExternal
            href={`mailto:${config.emailAddress}`}
            onClick={onClickEmail}
          >
            {config.emailAddress}
          </Link>
          .
        </p>

        <p>I look forward to hearing from you.</p>
      </section>
    </>
  );
}
