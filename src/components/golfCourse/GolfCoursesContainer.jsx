import React, { useState } from 'react';
import { Container, Box, Typography, makeStyles, Button } from '@material-ui/core';
import GolfGrid from './GolfGrid';
import Add from '@material-ui/icons/Add';
import NewCourseModal from './NewCourseModal';

const useStyles = makeStyles(theme => ({
    pageHeader: {
        font: 'Trebuchet MS',
        display:"grid",
        gridAutoFlow: "column",
        gridColumnGap: "25%"
    }
}));

const GolfCoursesContainer = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <Container maxWidth="lg">

                <Box
                    borderColor="primary.main"
                    borderBottom={2}
                    className={classes.pageHeader}
                >
                    <Typography 
                        variant="h3"
                    >
                        View all your Golf Courses here!
                    </Typography>
                    <Button 
                        variant="contained"
                        color="primary"
                        endIcon={<Add />}
                        onClick={handleOpen}
                    >
                        Add Course
                    </Button>
                </Box>
                <Box
                  m={2}  
                >
                    <GolfGrid />
                </Box>
                <NewCourseModal
                    openState={open}
                    closeFunction={handleClose}
                />
        </Container>
    );
}
export default GolfCoursesContainer;