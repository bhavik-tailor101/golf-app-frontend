import React from 'react';
import { Modal, Typography } from '@material-ui/core';

const NewCourseModal = (props) => {
    return(
        <Modal
            open={props.openState}
            onClose={props.closeFunction}
        >
            <Typography
                variant="h5"
            >
                Add New Course
            </Typography>
        </Modal>
    );
}
export default NewCourseModal;