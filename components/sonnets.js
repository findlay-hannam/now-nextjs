import React, { Component } from 'react';
import sonnets from '../resources/sonnets';
import styled from 'styled-components';

function Sonnet({
  'sonnet-name': sonnetName,
  sonnet,
}) {
  return (
    <div>
      <h2>{sonnetName}</h2>
      {sonnet.map((line, idx) => <div key={idx}>{line}</div>)}
    </div>
  );
}

const Nav = styled.nav`
overflow: hidden;
`;

const SonnetButton = styled.button`
display: inline;
`;

export default class Sonnets extends Component {
  constructor() {
    super();
    this.state = {
      selectedSonnet: 0,
    }
  }
  render() {
    return (
      <div>
        <Nav>
          {sonnets.map(({ number }) => <SonnetButton key={number} onClick={() => this.setState({ selectedSonnet: number - 1})}>{number}</SonnetButton>)}
        </Nav>
        <Sonnet {...sonnets[this.state.selectedSonnet]} />
      </div>
    );  
  }
}
