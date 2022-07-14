import React, {Component} from "react";
import "./LoginPage.css"
import {Grid} from "@mui/material";
import Image from "./Image/Image";
import Login from "./Login/Login";
import Asking from "./Asking/Asking";
import DownloadApp from "./DownloadApp/DownloadApp";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    changeLogin = () => {
        console.log(this.state.isLogin);
        if (this.state.isLogin)
            this.setState({isLogin: false});
        else this.setState({isLogin: true});
    }

    render() {
        return (<div>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <div className="loginPage_center">
                        <Image/>
                        <div>
                            <Login isLogin={this.state.isLogin}/>
                            <Asking isLogin={this.state.isLogin} changeLogin={this.changeLogin}/>
                            <DownloadApp/>
                        </div>
                    </div>
                </Grid>
                {/*<Grid item xs={3}></Grid>*/}
            </Grid>
        </div>);
    }
}

export default LoginPage;