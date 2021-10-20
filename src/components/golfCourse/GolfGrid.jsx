import React from 'react'
import { Grid } from '@material-ui/core';
import GolfCourseCard from './GolfCourseCard';
import golfCourses from "../../data/courses.json"

const golfGridList = golfCourses.map((course) => {
    return <Grid xs={6}>
        <GolfCourseCard
            courseName={course.courseName}
            address={course.address}
        />
    </Grid>
})

const GolfGrid = () => {
    return(
        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
            {golfGridList}
        </Grid>
    );
}
export default GolfGrid;