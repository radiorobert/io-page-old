import * as React from "react";

import { graphql } from "gatsby";
import Card from '../components/Card';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    background-color: #333;
    color: white;
    padding: 20px;
    font-family: Helvetica, Arial, sans-serif;
  }

  a {
    color: tomato;
  }
`;

const App = styled.div`
  background-color: #333;
`;

const Grid = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: 425px 250px 250px;
    grid-template-rows: 425px 200px 200px;
  }


  grid-column-gap: 16px;
  grid-column-gap: 16px;
`;

let maincontent = (
  <>
    <p>
      I love technology. I love learning new concepts and implementing them to make cool stuff.
    </p>

    <p>
      <h3>what i'm learning:</h3>
      <s>I'm learning and using React.js, Node, and SCSS stuff for front-end dev right now.</s>
      &nbsp;How to deploy a webapp and all the options out there.
    </p>

    <p>
    <h3>what happens here?</h3>
      On this site I'm going to try to showcase some of what I enjoy and do.
    </p>

    <p>
    <h3>what do I do?</h3>
      Right now I'm a Junior Front End Developer in Richmond, VA
    </p>

  </>
);


// markup
const IndexPage = ({ data }) => {

  return (
    <App>
      <GlobalStyle/>
        <Grid>
          <Card
            title="About me: Robert Blake"
            look="main"
            content={maincontent}
          />

          {
           data.allStrapiPost.edges.map((post) => (
             <Card
               title={post.node.Title}
             />
           ))}

        </Grid>
    </App>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allStrapiPost {
      edges {
        node {
          id
          Title
          Content
        }
      }
    }
  }
`;

