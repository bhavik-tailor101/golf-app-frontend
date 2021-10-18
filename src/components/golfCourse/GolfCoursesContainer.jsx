import React from 'react'
import { Container, Box, Typography, makeStyles } from '@material-ui/core';
import GolfGrid from './GolfGrid';

const useStyles = makeStyles(theme => ({
    pageHeader: {
        font: 'Trebuchet MS'
    }
}));

const GolfCoursesContainer = () => {
    const classes = useStyles();
    return(
        <Container maxWidth="lg">

                <Box
                    borderColor="primary.main"
                    borderBottom={2}
                >
                    <Typography 
                        variant="h3"
                        className={classes.pageHeader}
                    >
                        View all your Golf Courses here!
                    </Typography>
                    
                </Box>
                <GolfGrid />
        </Container>
    );
}
export default GolfCoursesContainer;