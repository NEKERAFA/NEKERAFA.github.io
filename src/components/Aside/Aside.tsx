import BookmarkIcon from '@material-ui/icons/BookmarkRounded';
import * as Colors from '../../shared/Constants/Colors';
import { Grid, IconButton, Menu, MenuItem, Paper, Tooltip } from '@material-ui/core';
import LanguageIcon from '../../shared/LanguageIcon/LanguageIcon';
import PersonIcon from '@material-ui/icons/PersonRounded';
import React, { useState } from 'react';
import SchoolIcon from '@material-ui/icons/SchoolRounded';
import { useTranslation } from 'react-i18next';
import * as Utils from '../../shared/Utils';
import WorkIcon from '@material-ui/icons/WorkRounded';
import './Aside.css';

const Aside : React.FunctionComponent = () => {
    // Traslation
    const { t, i18n } = useTranslation('Page');

    // State
    const [anchorEl, setAnchorEl] = useState(null);

    // Handlers
    const handleOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleSpanish = () => {
        Utils.changeSpanish();
        handleClose();
    }

    const handleEnglish = () => {
        Utils.changeEnglish();
        handleClose();
    }

    const handleGalician = () => {
        Utils.changeGalician();
        handleClose();
    }

    return <div className="AsideContainer">
        <Paper elevation={2} className="Aside" style={{ borderColor: Colors.GREEEN }}>
            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                <Grid item>
                    <IconButton onClick={Utils.gotoBiography}>
                        <Tooltip title={t("Biography") as string} arrow placement="right">
                            <PersonIcon style={{ color: Colors.GREEEN }} />
                        </Tooltip>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={Utils.gotoWork}>
                        <Tooltip title={t("Work") as string} arrow placement="right">
                            <WorkIcon style={{ color: Colors.GREEEN }} />
                        </Tooltip>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={Utils.gotoEducation}>
                        <Tooltip title={t("Education") as string} arrow placement="right">
                            <SchoolIcon style={{ color: Colors.GREEEN }} />
                        </Tooltip>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={Utils.gotoPortfolio}>
                        <Tooltip title={t("Portfolio") as string} arrow placement="right">
                            <BookmarkIcon style={{ color: Colors.GREEEN }} />
                        </Tooltip>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={handleOpen}>
                        <LanguageIcon variant={i18n.language} />
                    </IconButton>
                </Grid>
            </Grid>
            <Menu open={anchorEl != null} anchorEl={anchorEl} keepMounted>
                <MenuItem selected={i18n.language === 'es'} onClick={handleSpanish}>Español</MenuItem>
                <MenuItem selected={i18n.language === 'gl'} onClick={handleGalician}>Galego</MenuItem>
                <MenuItem selected={i18n.language === 'en'} onClick={handleEnglish}>English</MenuItem>
            </Menu>
        </Paper>
    </div>
};

export default Aside;