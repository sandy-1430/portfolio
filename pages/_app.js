import '../styles/globals.scss';
import graphcms from "../graphql-config";
import { gql } from "graphql-request";


const QUERY = gql`
  {
    portfolios {
      aboutUtils {
        describeMe
      }
    }
  }
`;

export async function getStaticProps() {
  const { portfolios } = await graphcms.request(QUERY);
  console.log(portfolios)
  return {
    props: {
      portfolios,
    },
  };
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp