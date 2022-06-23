import { FC, useState } from 'react';
import { Box, Typography, Badge, Grid, Collapse, IconButton, useMediaQuery } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material/styles';

import ContentWrapper from "@components/Base/ContentWrapper";
import StyledTextField from "@/components/Base/TextField";
import PersonalInfo from "@components/Detail/PersonalInfo";
import ListTable from "@components/Detail/ListTable";
import Evaluation from "@components/Detail/Evaluation";
import PersonalInfoData from "@mocks/PersonalInfo";
import CustomerListData from "@mocks/CustomerList";
import Detail from "@mocks/Detail";

const Details:FC<{}> = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleCollapse = (state: boolean) => () => {
        setIsCollapsed(state);
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
            <ContentWrapper>
                <Grid container>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h1" color="text.primary" sx={{ display: 'flex' }}>{ Detail.entityName }</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Badge color="warning" overlap="circular" badgeContent=" " sx={{ mr: '15px' }}></Badge>
                            {
                                isCollapsed
                                    ?   <IconButton onClick={ handleCollapse(false) }><KeyboardArrowUpIcon /></IconButton>
                                    :   <IconButton onClick={ handleCollapse(true) }><KeyboardArrowDownIcon /></IconButton>
                            }
                        </Box>
                    </Grid>
                    <Collapse in={ !isCollapsed } sx={{ width: '100%' }}>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <PersonalInfo info={ PersonalInfoData } />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: '35px' }}>
                            <ListTable entityName={ Detail.entityName } list={ CustomerListData } />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: '33px' }}>
                            <Evaluation />
                        </Grid>
                        {
                            !isMobile && 
                                <Grid item md={12} sx={{ mt: '33px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <StyledTextField label="Please describe" variant="filled" sx={{ width: '464px' }} />
                                    <Typography variant="h3" color="primary" sx={{ fontWeight: 700, cursor: 'pointer' }} onClick={ handleCollapse(true) }>Collapse view</Typography>
                                </Grid>
                        }
                        {
                            isMobile &&
                                <>
                                    <Grid item xs={12} sx={{ mt: '33px', display: 'flex', alignItems: 'center' }}>
                                        <StyledTextField label="Please describe" variant="filled" />
                                    </Grid>
                                    <Grid item xs={12} sx={{ mt: '10px', display: 'flex', justifyContent: 'right' }}>
                                        <Typography variant="h3" color="primary" sx={{ fontWeight: 700, cursor: 'pointer' }} onClick={ handleCollapse(true) }>Collapse view</Typography>
                                    </Grid>
                                </>
                        }
                    </Collapse>
                </Grid>
            </ContentWrapper>
        </Box>
    );
}

export default Details;