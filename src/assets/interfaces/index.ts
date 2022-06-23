import { BoxProps } from '@mui/material/Box';
import { ChipProps } from '@mui/material/Chip';

export interface Information {
    field: String,
    value: String
}

export interface PersonalInfoProps {
    info: Array<Information>
}

export type RadioButtonProps = {
    value: String,
    label: String,
    color: String,
} & BoxProps & ChipProps;

export interface Customer {
    primary_name: String,
    date_of_birth: String,
    citizenship: String,
    title: String,
    id: String,
    score: String,
    markedAsHit: Boolean
}

export interface CustomerListTableProps {
    entityName: String,
    list: Array<Customer>
}