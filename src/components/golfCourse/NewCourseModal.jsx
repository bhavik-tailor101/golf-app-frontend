import React from 'react';
import { Modal, Typography, makeStyles, Box, TextField } from '@material-ui/core';
import { bgcolor } from '@material-ui/system';

const useStyles = makeStyles({
    addCourse: {
        position: 'absolute',
        top: '45%',
        left: '45%',
        bgcolor: '#ffffff',
        border: '2px solid #000'
    }
});

const NewCourseModal = (props) => {
    const classes = useStyles();

    return(
        <Modal
            open={props.openState}
            onClose={props.closeFunction}
        >
            <Box
                component="form"
                className={classes.addCourse}
            >    
                <Typography
                    variant="h5"
                >
                    Add New Course
                </Typography>
                <TextField
                    label="Course Name"
                    variant="outlined"
                />
            </Box>
        </Modal>
    );
}
export default NewCourseModal;