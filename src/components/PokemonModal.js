import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import Pokemon from './Pokemon';
import { motion } from 'framer-motion';

class PokemonModal extends Component {
  state = {
    modal: false,
    name: '',
    pokemon: null,
    isLoaded: false,
    error: null,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      error: null,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  };

  onSubmit = (e) => {
    e.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            pokemon: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );

    this.toggle();
  };

  render() {
    const { error, isLoaded, pokemon } = this.state;
    let component = null;
    if (error) {
      component = (
        <div style={{ color: 'white', marginTop: '30px' }}>
          Uh oh! Something went wrong. Try again!
        </div>
      );
    } else if (!isLoaded) {
      component = (
        <motion.div
          style={{ marginTop: '30px', color: 'white' }}
          animate={{ x: [0, 20, 0, -20, 0] }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 2 }}
        >
          Waiting for pokemon...
        </motion.div>
      );
    } else {
      component = <Pokemon pokemon={pokemon} />;
    }
    return (
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'Pokemon Solid',
            color: 'yellow',
            textShadow: '4px 0px blue',
            fontSize: '50px',
            marginTop: '25px',
          }}
        >
          PoKéDeX
        </h1>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginTop: '20px' }}
          outline
        >
          New Pokemon
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Select a new Pokemon!</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Pokemon:</Label>
                <Input
                  type="text"
                  name="name"
                  id="pokemon"
                  onChange={this.onChange}
                />
                <Button color="success" style={{ marginTop: '2rem' }} block>
                  Display Pokemon
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        {component}
      </div>
    );
  }
}

export default PokemonModal;
