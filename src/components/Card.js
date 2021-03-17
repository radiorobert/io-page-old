import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  border-width: 5px;
  border-color: ${props => props.type === 'main' ? "tomato" : "white"};
  border-style: solid;
  padding: 16px;
  padding-top: 0px;

  h3 {
    margin-bottom: 4px;
  }

  p {
    font-size: 18px;
  }

`;

const Main = styled(Content)`
  border-color: tomato;

`;

class Card extends React.Component {
  render() {
    return (
      <Content type={this.props.look}>
          <h1>{this.props.title}</h1>
          {this.props.content}
        </Content>
    );
  }
}
export default Card;
