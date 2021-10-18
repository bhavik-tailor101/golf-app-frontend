import React from 'react'
import { Grid } from '@material-ui/core';
import GolfCourseCard from './GolfCourseCard';

const GolfGrid = () => {
    return(
        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
            <Grid xs={6}>
                <GolfCourseCard
                    courseName="PineView"
                />
            </Grid>
            <Grid xs={6}>
                <GolfCourseCard
                    courseName="Metcalfe"
                />
            </Grid>
        </Grid>
    );
}
export default GolfGrid;