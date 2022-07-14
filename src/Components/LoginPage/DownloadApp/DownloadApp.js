import React from 'react';
import "./DownloadApp.css";
import appStore from "../../../images/app.png";
import playStore from "../../../images/play.png";

function DownloadApp(props) {
    return (
        <div className="loginPage_download">
            <div className="loginPage_downloadText">Get the app.</div>
            <div className="loginPage_downloadOptions">
                <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.signupPage.badge&mt=8&vt=lo">
                    <img className="loginPage_downloadItem" src={appStore} alt="" width="136px"/>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DA207663D-851A-47BD-8AF3-C1403F2EA862%26utm_content%3Dlo%26utm_medium%3Dbadge">
                    <img className="loginPage_downloadItem" src={playStore} alt="" width="136px"/>
                </a>
            </div>
        </div>
    );
}

export default DownloadApp;