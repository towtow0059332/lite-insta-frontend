import React from 'react';
import "./MainContent.css";
import {Grid} from "@mui/material";
import StatusBar from "./StatusBar/StatusBar";
import Feed from "./Feed/Feed";
import InfoSection from "./InfoSection/InfoSection";
import Suggestion from "./Suggestion/Suggestion";

function MainContent(props) {
    return (
        <div>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={6}>
                    <div>
                        <StatusBar/>
                        <Feed/>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <InfoSection/>
                    <Suggestion/>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    );
}

export default MainContent;