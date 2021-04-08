import React from 'react';
import ModalConsumer from '../context/ModalConsumer'

const ModalRoot = () => (
    <ModalConsumer>
      {({ component: Component, props, hideModal }) =>
        Component ? <Component {...props} onRequestClose={hideModal} /> : null
      }
    </ModalConsumer>
  );