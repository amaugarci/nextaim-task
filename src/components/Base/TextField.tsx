import { TextField } from '@mui/material';
import { styled } from "@mui/system";
import { TextFieldProps } from '@mui/material/TextField';

const StyledTextField = styled(TextField)({
    width: '100%',
    height: '57px',
    border: '1px solid #C9C9C9',
    borderBottom: 0
});

export default (props: TextFieldProps) => {
    const { label, ...rest } = props;

    return (
        <StyledTextField label={ label } { ...rest } />
    );
}