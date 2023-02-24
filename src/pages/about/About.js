import { Helmet } from "react-helmet-async";

import { Link } from "components/Link";
import { config } from "utils/config";
import profilePicture from "./assets/chintan.jpg";
import "./About.scss";

export function About() {
  return (
    <>
      <Helmet>
        <title>{config.username} | about</title>
      </Helmet>

      <section className="about">
        <img
          width="100"
          height="100"
          src={profilePicture}
          alt={config.username}
        />

        <div className="about__text">
          {config.aboutIntro}
          {config.skillIntro}
          {config.techStackIntro}
          <p>
            Interested in working together? Let's&nbsp;
            <Link to="/contact">connect</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
