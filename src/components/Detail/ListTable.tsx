import { Typography, Switch, Stack, Box } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { styled } from '@mui/system';

import { CustomerListTableProps } from "@assets/interfaces/index";

const columns = (entityName: String) => ([
    {
        field: 'entityName',
        width: 123,
        sortable: false,
        disableColumnMenu: true,
        renderHeader: () => (<Typography variant="h4" color="text.light">Name of customer</Typography>),
        renderCell: (params: GridRenderCellParams) => (<Typography variant="h4" color="text.primary">{ entityName }</Typography>)
    }, {
        field: 'primary_name',
        width: 124,
        sortable: false,
        disableColumnMenu: true,
        renderHeader: () => (<Typography variant="h4" color="text.dark">Name on list</Typography>),
        renderCell: (params: GridRenderCellParams) => (<Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>{ params.value }</Typography>)
    }, {
        field: 'date_of_birth',
        width: 80,
        sortable: false,
        disableColumnMenu: true,
        renderHeader: () => (<Typography variant="h4" color="text.light">Date of birth</Typography>),
        renderCell: (params: GridRenderCellParams) => (
                        <Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>
                            { new Date(params.value).toLocaleDateString('pl-PL') }
                        </Typography>)
    }, {
        field: 'citizenship',
        width: 117,
        sortable: false,
        disableColumnMenu: true,
        renderHeader: () => (<Typography variant="h4" color="text.light">Citizenship</Typography>),
        renderCell: (params: GridRenderCellParams) => (<Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>{ params.value }</Typography>)
    }, {
        field: 'title',
        width: 225,
        sortable: false,
        disableColumnMenu: true,
        renderHeader: () => (<Typography variant="h4" color="text.light">List name</Typography>),
        renderCell: (params: GridRenderCellParams) => (<Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>{ params.value }</Typography>)
    }, {
        field: 'id',
        width: 94,
        sortable: false,
        disableColumnMenu: true,
        renderHeader: () => (<Typography variant="h4" color="text.light">DJ profile ID</Typography>),
        renderCell: (params: GridRenderCellParams) => (<Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>{ params.value }</Typography>)
    }, {
        field: 'score',
        width: 67,
        sortable: false,
        disableColumnMenu: true,
        renderHeader: () => (<Typography variant="h4" color="text.light">Score</Typography>),
        renderCell: (params: GridRenderCellParams) => (<Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>{ params.value }</Typography>)
    }, {
        field: 'markedAsHit',
        width: 94,
        sortable: false,
        disableColumnMenu: true,
        renderHeader: () => (<Typography variant="h4" color="text.light">Mark as hit</Typography>),
        renderCell: (params: GridRenderCellParams) => (<Switch checked={ params.value } />)
    }
]);

const StyledDataGrid = styled(DataGrid)({
    '& .MuiDataGrid-columnHeaders': {
        borderBottom: '1px solid #C9C9C9'
    },
    '& .MuiDataGrid-row': {
        borderBottom: '1px solid #E8E8E8'
    },
    '& .MuiDataGrid-row .MuiDataGrid-cell--withRenderer:not(:nth-last-of-type(2))': {
        minHeight: '14px !important',
        maxHeight: '14px !important',
        marginTop: '19px',
        marginBottom: '19px',
        border: 0,
        borderRight: '2px solid #C9C9C9'
    },
    '& .MuiDataGrid-cell--withRenderer:nth-last-of-type(2)': {
        border: 0
    }
});

const ListTable = (props: CustomerListTableProps) => {
    const { entityName, list } = props;

    return (
        <Stack style={{ width: '100%' }}>
            <StyledDataGrid
                autoHeight
                rows={list}
                columns={columns(entityName)}
                disableColumnSelector={ false }
                hideFooter={ true }
                sx={{
                    border: 0
                }}
            />
            <Stack sx={{ mt: '17px' }}>
                <Typography variant="h4" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}><AssignmentIndOutlinedIcon sx={{ color: '#5C5C5C', mr: '6px', fontSize: 14 }} fontSize='small' />System</Typography>
                <Typography variant="h4" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mt: '6px' }}><EventAvailableIcon sx={{ color: '#5C5C5C', mr: '6px', fontSize: 14 }} fontSize='small' />2022-03-25 | 14:57</Typography>
            </Stack>
        </Stack>
    );
}

export default ListTable;