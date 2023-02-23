import { Helmet } from "react-helmet-async";

import { Link } from "components/Link";
import profilePicture from "./assets/techchintan.jpg";
import "./About.scss";

export function About() {
  return (
    <>
      <Helmet>
        <title>techchintan | about</title>
      </Helmet>

      <section className="about">
        <img width="100" height="100" src={profilePicture} alt="techchintan" />

        <div className="about__text">
          <h2 className="about__intro">
            Namaste🙏! I'm Chintan Sudani, a Software Engineer from the INDIA.
          </h2>

          <p>
            I am an expert in using the&nbsp;
            <abbr title="MongoDB, Express, React, and Node.js">MERN</abbr>
            &nbsp;stack in implementing server-side logic and visual elements
            that users interact with within the application.
          </p>

          <p>
            My skillset also includes extensive experience in working with JavaScript,
            React, NextJS, VueJS with TypeScript and MongoDB, MySQL databases.
          </p>

          <p>
            Interested in working together? Let's&nbsp;
            <Link to="/contact">connect</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
