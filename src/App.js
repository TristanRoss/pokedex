import React, { Component } from 'react';
import PokemonModal from './components/PokemonModal';
import { Container } from 'reactstrap';
import ColorBars from './components/ColorBars';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div style={{ minWidth: '300px', height: '100%' }}>
        <Container>
          <PokemonModal />
          <ColorBars />
        </Container>
      </div>
    );
  }
}

export default App;
