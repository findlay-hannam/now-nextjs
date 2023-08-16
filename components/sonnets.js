import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import sonnets from '../resources/sonnets';
import styled from 'styled-components';

function Sonnet({
  'sonnet-name': sonnetName,
  sonnet,
}) {
  return (
    <div>
      <Typography>
        <h2>{sonnetName}</h2>
        {sonnet.map((line, idx) => <div key={idx}>{line}</div>)}
      </Typography>
    </div>
  );
}

const Nav = styled.nav`
overflow: hidden;
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
        <div style={{ overflow: 'hidden' }}>
          <div style={{maxHeight: 40, overflow: 'auto', whiteSpace: 'nowrap'}}>
            {sonnets.map(({ number }) => <Button variant="outlined" key={number} onClick={() => this.setState({ selectedSonnet: number - 1})}>{number}</Button>)}
          </div>
        </div>
        <Sonnet {...sonnets[this.state.selectedSonnet]} />
      </div>
    );  
  }
}
