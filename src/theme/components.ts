import { experimental_sx as sx } from '@mui/material/styles';

export default () => ({
    MuiChip: {
        styleOverrides: {
            root: sx({
                minWidth: '83px',
                height: '24px',
                borderRadius: '2px',
                textTransform: 'uppercase',
                paddingLeft: '10px',
                paddingRight: '10px',
                fontWeight: 700,
                '&.MuiChip-colorError': {
                    background: '#FF4A4A22',
                    color: '#FF4A4A'
                },
                '&.MuiChip-colorSecondary': {
                    background: '#1A1A1A22',
                    color: '#1A1A1A'
                }
            }),
            label: {
                padding: 'initial',
            },
            icon: sx({
                mr: 0.5,
                ml: '-2px',
            }),
        },
    },
});