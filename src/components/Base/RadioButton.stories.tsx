import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from './RadioButton';

export default {
    component: RadioButton,
    title: 'RadioButton',
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
            control: { type: 'radio' }
        }
    }
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = args => <RadioButton { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'RadioButton',
    color: "primary"
};

export const Error = Template.bind({});
Error.args = {
    label: 'RadioButton',
    color: "error"
};