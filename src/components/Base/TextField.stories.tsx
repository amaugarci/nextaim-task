import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextField from './TextField';

export default {
    component: TextField,
    title: 'TextField',
    argTypes: {
        variant: {
            options: ['filled', 'outlined'],
            control: { type: 'radio' }
        }
    }
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField { ...args } />;

export const Filled = Template.bind({});
Filled.args = {
    label: 'FilledTextField',
    variant: "filled"
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: 'OutlinedTextField',
    variant: "outlined"
};