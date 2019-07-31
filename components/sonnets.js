import React, { Component } from 'react';
import sonnets from '../resources/sonnets';

function Sonnet({
  'sonnet-name': sonnetName,
  sonnet,
}) {
  return (
    <div>
      <h2>{sonnetName}</h2>
      {sonnet.map(line => <div>{line}</div>)}
    </div>
  );
}

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
        {sonnets.map(({ number }) => <button onClick={() => this.setState({ selectedSonnet: number - 1})}>{number}</button>)}
        <Sonnet {...sonnets[this.state.selectedSonnet]} />
      </div>
    );  
  }
}
