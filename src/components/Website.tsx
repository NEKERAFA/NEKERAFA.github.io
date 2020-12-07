import { CssBaseline, Grid } from '@material-ui/core';
import Aside from './Aside/Aside';
import BottomAppBar from './BottomBar/BottomBar';
import Page from './Page/Page';
import React from 'react';
import './Website.css';

const Website : React.FunctionComponent = () => (
    <React.Fragment>
      <CssBaseline />
        <div className="Main">
            <Grid container direction="row" spacing={1}>
                <Grid className="AsideContainer" item>
                    <Aside />
                </Grid>
                <Grid item xs>
                    <Page />
                </Grid>
            </Grid>
        </div>
        <div className="MobileAppBar">
            <BottomAppBar />
        </div>
    </React.Fragment>
)

export default Website;