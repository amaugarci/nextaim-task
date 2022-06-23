import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListTable from "./ListTable";

export default {
    component: ListTable,
    title: 'ListTable',
} as ComponentMeta<typeof ListTable>;

const Template: ComponentStory<typeof ListTable> = args => <ListTable { ...args } />;

export const Default = Template.bind({});
Default.args = {
    entityName: "Rhona Jefferson",
    list: [
        {
            primary_name: "Rhona Jefferson",
            title: "Example List 1",
            date_of_birth: "1959-04-21",
            citizenship: "GB",
            id: "2939426",
            markedAsHit: false,
            score: "1",
        }
    ]
};