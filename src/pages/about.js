import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage alt="V me 50" src="../images/694.jpg"></StaticImage>
    </Layout>
  );
};

// export const Head = () => (
//   <>
//     <title>About Me</title>
//     <meta name="description" content="Your description" />
//   </>
// );

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
