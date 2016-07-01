import React from 'react';
import { Modal } from 'react-native';
import { ExcerciseList } from './ExcerciseList';

export const ExcerciseModal = (props) => (
  <Modal
    style={{ flex: 1 }}
    animationType={'slide'}
    visible={props.visible}
    onRequestClose={props.closeModal}
  >
    <ExcerciseList {...props} />
  </Modal>
);
