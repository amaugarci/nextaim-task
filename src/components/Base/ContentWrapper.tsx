import { Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '16px',
    width: '974px',
    background: '#FFF',
    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
})) as typeof Container;

export default StyledContainer;