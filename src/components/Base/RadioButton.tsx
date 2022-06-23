import { FormControlLabel, Chip, Box } from '@mui/material';

import { RadioButtonProps } from "@assets/interfaces/index";
import Radio from "./Radio";

const RadioButton = (props: RadioButtonProps) => {
    const { value, label, color, sx } = props;

    return (
        <Box sx={{ display: 'inline', ...sx }}>
            <FormControlLabel value={ value } control={ <Radio /> } label="" sx={{ mr: 0 }} />
            <Chip label={ label } variant="filled" color={ color } />
        </Box>
    )
}

export default RadioButton;