import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PersonalInfo from './PersonalInfo';

export default {
    component: PersonalInfo,
    title: 'PersonalInfoTable',
} as ComponentMeta<typeof PersonalInfo>;

const Template: ComponentStory<typeof PersonalInfo> = args => <PersonalInfo { ...args } />;

export const Salutation = Template.bind({});
Salutation.args = {
    info: [{ field: "Salutation", value: "Mrs" }]
};

export const DateofBirth = Template.bind({});
DateofBirth.args = {
    info: [
        { field: "Salutation", value: "Mrs" },
        { field: "Date of birth", value: "19.02.1978" }
    ]
}

export const Nationality = Template.bind({});
Nationality.args = {
    info: [
        { field: "Salutation", value: "Mrs" },
        { field: "Date of birth", value: "19.02.1978" },
        { field: "Nationality", value: "Germany" }
    ]
}