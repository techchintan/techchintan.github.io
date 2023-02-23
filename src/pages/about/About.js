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
            Namaste🙏! <br /> I'm Chintan Sudani, a Professional Software
            Engineer from the INDIA.
          </h2>

          <p>
            I am a full-stack web architect who is an expert in using the &nbsp;
            <abbr title="MongoDB, Express, React, and Node.js">MERN</abbr>
            &nbsp; stack to implement server-side logic and visual elements that
            users interact with within the application.
          </p>

          <p>
            My skillset also includes extensive experience in working with
            HTML5, CSS3, JavaScript, React.js, Next.js, Vue.js with TypeScript,
            TailwindCSS, Redux, Recoil.js, and Node.js, MongoDB, MySQL
            databases.
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
