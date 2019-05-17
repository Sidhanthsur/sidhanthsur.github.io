import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CircleImage from './CircleImage'

storiesOf('CircleImage', module)
    .add('with image', () => <CircleImage></CircleImage>)

