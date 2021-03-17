import * as React from "react";
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
  grid-template-columns: 600px 50px;
  grid-template-rows: 375px 50px 50px;
  grid-column-gap: 25px;
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

let socialStuff = (
  <>
    <p>
    </p>

    <p>
    </p>


    <p>
    </p>
  </>
);


// markup
const IndexPage = () => {
  return (
    <App>
      <GlobalStyle/>
        <Grid>
          <Card
            title="About me: Robert Blake"
            look="main"
            content={maincontent}
          />

        </Grid>
    </App>
  );
};

export default IndexPage;
