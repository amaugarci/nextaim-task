import { Stack, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Information, PersonalInfoProps } from "@assets/interfaces/index";

const PersonalInfo = (props: PersonalInfoProps) => {
    const { info } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Stack sx={{ width: isMobile ? '100%' : '270px' }} spacing='6px'>
            {
                info.map((item: Information , index) =>
                    <Grid container key={ index }>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" color="text.secondary">
                                { item.field }
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" color="text.primary">
                                { item.value }
                            </Typography>
                        </Grid>
                    </Grid>
                )
            }
        </Stack>
    );
}

export default PersonalInfo;