import * as Colors from '../../../shared/Constants/Colors';
import React from 'react';
import { Typography } from '@material-ui/core';
import './TitleSection.css';

type TitleSectionProps = {
    id: string
    content: string
}

const TitleSection : React.FunctionComponent<TitleSectionProps> = ({ id, content }) => (
    <Typography id={id} variant="subtitle1" component="h1" className="TitleSection" style={{ textDecorationColor: Colors.GREEEN }}>
        {content}
    </Typography>
);

export default TitleSection;