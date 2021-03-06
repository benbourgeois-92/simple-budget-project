import React from 'react';
import ModalContext from './ModalContext'

class ModalProvider extends React.Component {

    showModal = (component, props = {}) => {
      this.setState({
        component,
        props
      });
    };
  
    hideModal = () => this.setState({
      component: null,
      props: {},
    });
  
    state = {
      component: null,
      props: {},
      showModal: this.showModal,
      hideModal: this.hideModal
    };
  
    render() {
      return (
        <ModalContext.Provider value={this.state}>
          {this.props.children}
        </ModalContext.Provider>
      );
    }
  }