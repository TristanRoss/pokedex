import React, { Component } from 'react';
import PokemonModal from './components/PokemonModal';
import { Container } from 'reactstrap';
import ColorBars from './components/ColorBars';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from 'react-icons/fa';

class App extends Component {
  render() {
    return (
      <div style={{ minWidth: '300px', height: '100%' }}>
        <Container>
          <PokemonModal />
          <ColorBars />
          <div
            style={{
              margin: '0 auto',
              width: '50px',
              padding: '20px 0',
              textAlign: 'center',
            }}
          >
            <a href={'https://github.com/TristanRoss/pokedex/tree/master'}>
              <FaGithub color={'white'} size={'1.8em'}></FaGithub>
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
