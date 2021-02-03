import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { motion } from 'framer-motion';
class ColorBars extends Component {
  render() {
    return (
      <Container
        style={{ width: '400px', marginTop: '20px', paddingLeft: '50px' }}
      >
        <motion.div
          style={{
            height: '5px',
            width: '20px',
            backgroundColor: 'red',
            marginBottom: '20px',
          }}
          animate={{ x: [0, 200, 0], rotate: 180 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 1.0,
            padding: 0,
          }}
        ></motion.div>
        <motion.div
          style={{
            height: '5px',
            width: '20px',
            backgroundColor: 'yellow',
            marginBottom: '20px',
          }}
          animate={{ x: [0, 200, 0], rotate: 360 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 0.2,
            repeatDelay: 1.0,
            padding: 0,
          }}
        ></motion.div>
        <motion.div
          style={{
            height: '5px',
            width: '20px',
            backgroundColor: 'blue',
            marginBottom: '20px',
          }}
          animate={{ x: [0, 200, 0], rotate: 540 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 0.4,
            repeatDelay: 1.0,
            padding: 0,
          }}
        ></motion.div>
        <motion.div
          style={{
            height: '5px',
            width: '20px',
            backgroundColor: 'green',
            marginBottom: '20px',
          }}
          animate={{ x: [0, 200, 0], rotate: 720 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 0.6,
            repeatDelay: 1.0,
            padding: 0,
          }}
        ></motion.div>
      </Container>
    );
  }
}

export default ColorBars;
