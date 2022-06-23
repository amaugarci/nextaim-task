import { FC } from 'react';
import { Stack, Typography, RadioGroup, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import RadioButton from "@components/Base/RadioButton";

const Evaluation:FC<{}> = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Stack>
            <Typography variant="h2">Decision &amp; documentation of findings for positive hit*</Typography>
            <Typography variant="h3" color="text.secondary" sx={{ mt: '6px' }}>Scope of customer due diligence</Typography>
            <RadioGroup defaultValue="high" name="radio-buttons-group" sx={{ display: 'inline', mt: '27px' }}>
                {
                    isMobile ?
                        <Stack>
                            <RadioButton value="high" label="High" color="error" />
                            <RadioButton value="prohibited" label="Prohibited" color="secondary" />
                        </Stack>
                    :
                        <>
                            <RadioButton value="high" label="High" color="error" />
                            <RadioButton value="prohibited" label="Prohibited" color="secondary" sx={{ ml: '33px' }} />
                        </>
                }
            </RadioGroup>
        </Stack>
    )
}

export default Evaluation;