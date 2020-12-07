import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import TitleSection from './TitleSection/TitleSection';
import { useTranslation } from 'react-i18next';
import './Page.css'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
import works from '../../content/works.json';

const Page = () => {
    const { t } = useTranslation('Page');

    return <div className="Page">
        <TitleSection id="biography" content={t('Biography')} />
        <Paper className="Article Biography">
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Avatar style={{ filter: "grayscale(80%) drop-shadow(0px 1px 2px #0004)" }} className="Avatar" src="images/profile.jpg" />
                    <Typography style={{ marginTop: '4px' }} className="Centered" variant="subtitle1" component="h2">
                        Rafael Alcalde Azpiazu
                    </Typography>
                    <div className="Centered">
                        <a href="https://twitter.com/nekerafa_dev" target="_blank" rel="noreferrer" className="fab fa-twitter"></a>
                        <a href="https://www.linkedin.com/in/rafael-alcalde-azpiazu" target="_blank" rel="noreferrer" className="fab fa-linkedin"></a>
                        <a href="https://github.com/nekerafa" target="_blank" rel="noreferrer" className="fab fa-github"></a>
                        <a href="https://gitlab.com/nekerafa" target="_blank" rel="noreferrer" className="fab fa-gitlab"></a>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography className="Centered" variant="subtitle1" component="p">
                        {t("Subtitle")}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {t("AboutMe1")}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {t("AboutMe2")}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {t("AboutMe3")}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>

        <TitleSection id="work" content={t('Work')} />
        <Paper className="Timeline">
            <Timeline>
                {works.map(work => {
                    const newBusiness = work.business !== undefined;

                    let hourClasses = "TimelineHour";
                    if (!newBusiness) {
                        hourClasses = `${hourClasses} TimelineHourNoIcon`;
                    }

                    let contentClasses = "TimelineContent";
                    if (!newBusiness) {
                        contentClasses = `${contentClasses} TimelineContentNoIcon`;
                    }

                    return <TimelineItem>
                        <TimelineOppositeContent className={hourClasses}>
                            <Typography className="TimelineHourLine" variant="subtitle2" color="textSecondary">
                                {`${t(work.date.from.month)} ${work.date.from.year}`}
                            </Typography>
                            {work.date.to && <Typography className="TimelineHourLine" variant="subtitle2" color="textSecondary">
                                {`- ${t(work.date.to.month)} ${work.date.to.year}`}
                            </Typography>}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={work.color ? { backgroundColor: work.color } : undefined}>
                                { work.icon ? <img className="Icon" src={work.icon} /> : undefined }
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper variant="outlined" className={contentClasses}>
                                {work.work ? <Typography variant="h6" component="h2">
                                    {t(work.work)}
                                </Typography> : undefined}
                                {work.business ? <Typography variant="subtitle1" component="h3" color="textSecondary">
                                    {work.business}
                                </Typography> : undefined}
                                <Typography variant="subtitle2" component="h4" color="textSecondary">
                                    {t(work.contract)}
                                </Typography>
                                {work.skills ? <ul>
                                    {work.skills.map(skill => 
                                        <Typography variant="body1" component="li">
                                            {t(skill)}
                                        </Typography>
                                    )}
                                </ul> : undefined}
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                })}
            </Timeline>
        </Paper>

        <TitleSection id="education" content={t('Education')} />
        <Paper className="Timeline">
            <Timeline>
                {works.map(work => {
                    const newBusiness = work.business !== undefined;

                    let hourClasses = "TimelineHour";
                    if (!newBusiness) {
                        hourClasses = `${hourClasses} TimelineHourNoIcon`;
                    }

                    let contentClasses = "TimelineContent";
                    if (!newBusiness) {
                        contentClasses = `${contentClasses} TimelineContentNoIcon`;
                    }

                    return <TimelineItem>
                        <TimelineOppositeContent className={hourClasses}>
                            <Typography className="TimelineHourLine" variant="subtitle2" color="textSecondary">
                                {`${t(work.date.from.month)} ${work.date.from.year}`}
                            </Typography>
                            {work.date.to && <Typography className="TimelineHourLine" variant="subtitle2" color="textSecondary">
                                {`- ${t(work.date.to.month)} ${work.date.to.year}`}
                            </Typography>}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={work.color ? { backgroundColor: work.color } : undefined}>
                                { work.icon ? <img className="Icon" src={work.icon} /> : undefined }
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper variant="outlined" className={contentClasses}>
                                {work.work ? <Typography variant="h6" component="h2">
                                    {t(work.work)}
                                </Typography> : undefined}
                                {work.business ? <Typography variant="subtitle1" component="h3" color="textSecondary">
                                    {work.business}
                                </Typography> : undefined}
                                <Typography variant="subtitle2" component="h4" color="textSecondary">
                                    {t(work.contract)}
                                </Typography>
                                {work.skills ? <ul>
                                    {work.skills.map(skill => 
                                        <Typography variant="body1" component="li">
                                            {t(skill)}
                                        </Typography>
                                    )}
                                </ul> : undefined}
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                })}
            </Timeline>
        </Paper>

        <TitleSection id="portfolio" content={t('Portfolio')} />
        <Paper className="Article" >
            Example
        </Paper>
    </div>
};

export default Page;