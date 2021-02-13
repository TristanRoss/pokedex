import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { AnimatePresence, motion } from 'framer-motion';

export class Pokemon extends Component {
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    let component;
    const { pokemon } = this.props;
    if (pokemon) {
      let types = 'Types: ';
      for (let i = 0; i < pokemon.types.length; i++) {
        types += this.capitalize(pokemon.types[i].type.name) + ' ';
      }

      let typeText = <CardText>{types}</CardText>;
      component = (
        <Card
          style={{
            maxWidth: '400px',
            margin: '0 auto',
            height: '284px',
            marginTop: '20px',
            textAlign: 'center',
            boxShadow: '0px 0px 10px white',
            backgroundColor: 'rgb(14, 15, 19)',
            color: 'white',
          }}
        >
          <CardBody style={{ paddingBottom: '0px' }}>
            <motion.div
              animate={{ opacity: [0, 1], y: [-5, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CardTitle tag="h3">{this.capitalize(pokemon['name'])}</CardTitle>
            </motion.div>
          </CardBody>
          <CardImg
            src={pokemon.sprites.front_default}
            alt="Pokemon"
            style={{ maxWidth: '125px', margin: '0 auto' }}
          />
          <CardBody style={{ fontWeight: '600', paddingTop: '0px' }}>
            <motion.div
              animate={{ opacity: [0, 1], y: [5, 0] }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CardText>{pokemon.height} decimeters</CardText>
            </motion.div>
            <motion.div
              animate={{ opacity: [0, 1], y: [5, 0] }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CardText>{pokemon.weight} hectograms</CardText>
            </motion.div>
            <motion.div
              animate={{ opacity: [0, 1], y: [5, 0] }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {typeText}
            </motion.div>
          </CardBody>
        </Card>
      );
    }
    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={pokemon.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          {component}
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default Pokemon;
