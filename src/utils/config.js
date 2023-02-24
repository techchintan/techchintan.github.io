import {
  AngelOneIcon,
  MoneyHopIcon,
  SigNozIcon,
} from "pages/projects/assets/icons";
import { ExternalLink } from "pages/projects/ExternalLink";
import { FaLinkedinIn, FaMediumM, FaTwitter } from "react-icons/fa";
import { GrSkype } from "react-icons/gr";
import { ImGithub, ImStackoverflow } from "react-icons/im";
import { SiUpwork } from "react-icons/si";

export const config = {
  emailAddress: "csudani7@gmail.com",
  name:"Chintan Sudani",
  username: "techchintan",
  aboutIntro: (
    <h2 className="about__intro">
      Namaste🙏! <br /> I'm Chintan Sudani, a Professional Software Engineer
      from the INDIA.
    </h2>
  ),
  skillIntro: (
    <p>
      I am a full-stack web architect who is an expert in using the &nbsp;
      <abbr title="MongoDB, Express, React, and Node.js">MERN</abbr>
      &nbsp; stack to implement server-side logic and visual elements that users
      interact with within the application.
    </p>
  ),
  techStackIntro: (
    <p>
      My skillset also includes extensive experience in working with HTML5,
      CSS3, JavaScript, React.js, Next.js, Vue.js with TypeScript, TailwindCSS,
      Redux, Recoil.js, and Node.js, MongoDB, MySQL databases.
    </p>
  ),
  contactText:
    "I am open to engaging in exciting freelance opportunities and projects. If you are interested in working with me, the most efficient way to reach me is by sending an email to",
  projects: [
    {
      title: (
        <ExternalLink to="https://signoz.io/">
          <h3>SigNoz: Open-source observability platform</h3>
        </ExternalLink>
      ),
      logo: <SigNozIcon />,
      description: (
        <>
          <p>
            Signoz is an open-source observability platform that helps engineers
            monitor and troubleshoot complex distributed systems. With features
            such as tracing, metrics, and logs, Signoz provides comprehensive
            visibility into the performance and health of applications.
          </p>
          <p>
            Signoz's frontend tech stack is built on React and Redux, providing
            a robust and scalable architecture for the user interface of the
            application. Additionally, it incorporates Ant Design components for
            a sleek and modern design.
          </p>
        </>
      ),
      tags: [
        "React.js",
        "Typescript",
        "Ant Design",
        "Redux",
        "jestjs",
        "Unit Testing",
        "API Integration",
      ],
      links: [
        <ExternalLink to="https://github.com/SigNoz/signoz">
          GitHub
        </ExternalLink>,
      ],
    },
    {
      title: (
        <ExternalLink to="https://www.angelone.in/">
          <h3>Angel One: Online Trading & Stock Broking</h3>
        </ExternalLink>
      ),
      logo: <AngelOneIcon />,
      description: (
        <>
          <p>
            AngelOne Trading Platform is a web-based investment platform that
            allows users to trade in equities, derivatives, and mutual funds.
            With its user-friendly interface and comprehensive research tools,
            AngelOne aims to provide a seamless and efficient trading experience
            for investors of all levels.
          </p>

          <div>
            As a developer with AngelOne, I had the following key
            responsibilities:
            <ul>
              <li>
                Created an eSign KYC module for sub-brokers to facilitate
                trading with AngelOne. Implemented custom validation of buttons
                at every step of KYC to prevent unwanted actions by end users.
              </li>
              <li>
                Configured Unit testing and E2E testing libraries like Jest and
                Cypress.io from scratch. Wrote over 534 test cases for
                components, pages, and E2E services to achieve the desired code
                coverage.
              </li>
              <li>
                Continuously improved code and structure for better bug-free
                features, resulting in an 90% code coverage.
              </li>
            </ul>
          </div>
        </>
      ),
      tags: [
        "Vue.js",
        "VueX",
        "Typescript",
        "SCSS",
        "Cypress.io",
        "Vuetify",
        "Vitest",
        "Postman",
      ],
      links: [
        <ExternalLink to="https://trade.angelone.in/">
          AngelOne KYC
        </ExternalLink>,
      ],
    },
    {
      title: (
        <ExternalLink to="https://www.moneyhop.co/">
          <h3>moneyHOP: India's First Cross-Border Neo Bank</h3>
        </ExternalLink>
      ),
      logo: <MoneyHopIcon />,
      description: (
        <>
          <p>
            moneyHOP is We are a full-stack banking solution that lets users
            Save, Invest, Borrow, and Spend. It has introduced the concept of
            ‘One Global Account - One Global Card’ - which allows users to do
            ‘everything banking’ from anywhere.
          </p>

          <div>
            As a software engineer at moneyHOP, I had the following
            responsibilities and accomplishments:
            <ul>
              <li>
                As a founding tech member, I oversaw the end-to-end product
                development of the frontend for cross-border Neo Bank Solutions,
                Remittance, and SaaS modules.
              </li>
              <li>
                I designed and built the Remittance frontend system from scratch
                and shaped the product continuously with the Founder and Product
                Managers to achieve the product-market fit. Additionally, I
                participated in the hiring process to bolster the tech team,
                mentored junior team members, and assisted them in debugging
                customer and vendor onboarding queries and reporting bugs.
              </li>
            </ul>
          </div>
          <p>
            This project allowed me to explore technologies such as Progressive
            Web Apps, AWS services like DynamoDB, AWS Amplify, and s3 Bucket.
          </p>
        </>
      ),
      tags: [
        "Next.js",
        "Typescript",
        "React.js",
        "Material-Ui",
        "Recoil.js",
        "AWS",
        "PWA",
        "API Integration",
      ],
      links: [
        <ExternalLink to="https://hopremit.moneyhop.co/">
          hopRemit - for Customers
        </ExternalLink>,
        <ExternalLink to="https://k2.moneyhop.co/">
          k2Remit - Vendors
        </ExternalLink>,
      ],
    },
  ],
  footerLinks: [
    {
      label: "linkedin.com",
      href: "https://www.linkedin.com/in/techchintan",
      icon: <FaLinkedinIn />,
    },
    {
      label: "github.com",
      href: "https://github.com/techchintan",
      icon: <ImGithub />,
    },
    {
      label: "upwork.com",
      href: "https://www.upwork.com/freelancers/techchintan",
      icon: <SiUpwork />,
    },
    {
      label: "stackoverflow.com",
      href: "https://stackoverflow.com/users/13493633/techchintan?tab=profile",
      icon: <ImStackoverflow />,
    },
    {
      label: "medium.com",
      href: "https://techchintan.medium.com/",
      icon: <FaMediumM />,
    },
    {
      label: "skype.com",
      href: "https://join.skype.com/invite/YHF6tNWb70hH",
      icon: <GrSkype />,
    },
    {
      label: "twitter.com",
      href: "https://twitter.com/techchintan",
      icon: <FaTwitter />,
    },
  ],
};
