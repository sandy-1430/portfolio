import graphcms from "../graphql-config";
import Header from "./Header";
import Banner from "./Banner";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const QUERY = `
  {
    portfolios {
       bannerUtils {
        firstName
        lastName
        role
      }
      aboutUtils {
        describeMe
      }
      serviceUtils {
        ... on ServicesUtils {
          serviceDesc
          serviceTitle
          serviceIcon {
            url
          }
        }
      }
      workUtils {
        projectDesc
        projectTitle
        projectType
        projectImg {
          url
        }
        projectUrl
      }
    }
  }
`;

export async function getStaticProps() {
  const { portfolios } = await graphcms.request(QUERY);
  const personalInfo = portfolios[0].bannerUtils;
  const aboutUtils = portfolios[0].aboutUtils;
  const serviceUtils = portfolios[0].serviceUtils;
  const workUtils = portfolios[0].workUtils;
  return {
    props: {
      personalInfo, aboutUtils, serviceUtils, workUtils
    },
  };
}

export default function Home({ personalInfo, aboutUtils, serviceUtils, workUtils }) {
  return (
    <>
      <Header />
      <Banner personalInfo={personalInfo} />
      <About personalInfo={personalInfo} aboutUtils={aboutUtils} />
      <Services serviceUtils={serviceUtils} />
      <Portfolio workUtils={workUtils} />
      <Contact />
      <Footer />
    </>
  );
}
