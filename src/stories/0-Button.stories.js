import React from 'react';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const icon = () => (
  <Button onClick={action('clicked')}>
    <FontAwesomeIcon icon={faPlay} />
  </Button>
);

