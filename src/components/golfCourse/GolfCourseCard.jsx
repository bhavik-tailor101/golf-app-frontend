import React from 'react'
import { Card, CardHeader, CardMedia, Typography, CardContent } from '@material-ui/core';
import FALLBACK_IMAGE from '../../fall_back_image.png'

const onMediaFallback = event => event.target.src  = FALLBACK_IMAGE;

const GolfCourseCard = (props) => {
    const { courseName } = props;
    return(
        <Card>
            <CardContent>
                <Typography
                    variant="h5"
                >
                    {courseName}
                </Typography>
            </CardContent>
        </Card>
    );
}
export default GolfCourseCard;