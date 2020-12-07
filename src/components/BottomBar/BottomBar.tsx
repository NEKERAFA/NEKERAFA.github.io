import { BottomNavigation, BottomNavigationAction, Menu, MenuItem } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/BookmarkRounded';
import * as Colors from '../../shared/Constants/Colors';
import LanguageIcon from '../../shared/LanguageIcon/LanguageIcon';
import PersonIcon from '@material-ui/icons/PersonRounded';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Utils from '../../shared/Utils';
import SchoolIcon from '@material-ui/icons/SchoolRounded';
import WorkIcon from '@material-ui/icons/WorkRounded';
import './BottomBar.css';

const BottomBar : React.FunctionComponent = () => {
    // Traslation
    const { i18n } = useTranslation();

    // State
    const [anchorEl, setAnchorEl] = useState(null);

    // Handler
    const handleClick = (event: any) => {
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

    return <BottomNavigation className="BottomBar">
        <BottomNavigationAction onClick={Utils.gotoBiography} icon={<PersonIcon style={{ color: Colors.GREEEN }} />}/>
        <BottomNavigationAction onClick={Utils.gotoWork} icon={<WorkIcon style={{ color: Colors.GREEEN }} />}/>
        <BottomNavigationAction onClick={Utils.gotoEducation} icon={<SchoolIcon style={{ color: Colors.GREEEN }} />}/>
        <BottomNavigationAction onClick={Utils.gotoPortfolio} icon={<BookmarkIcon style={{ color: Colors.GREEEN }} />}/>
        <BottomNavigationAction onClick={handleClick} icon={<LanguageIcon variant={i18n.language} />}/>
        <Menu open={anchorEl != null} anchorEl={anchorEl} keepMounted>
            <MenuItem selected={i18n.language === 'es'} onClick={handleSpanish}>Español</MenuItem>
            <MenuItem selected={i18n.language === 'gl'} onClick={handleGalician}>Galego</MenuItem>
            <MenuItem selected={i18n.language === 'en'} onClick={handleEnglish}>English</MenuItem>
        </Menu>
    </BottomNavigation>
};

export default BottomBar;