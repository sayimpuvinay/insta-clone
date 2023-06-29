import React, { Component } from "react";
import Grid from '@mui/material/Grid'; // Grid version 1
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={3}>
                        <div className="loginpage__main">
                            <div>
                                <img src={inst_image} width="350" height="500" alt="Instagram_Banner" />
                            </div>
                            <div>
                                <div className="loginpage__rightcomponent">
                                    <img className="loginpage__logo" src={insta_logo} width="150" alt="Instagram_Logo" />
                                    <div className="TextEntries">
                                        <div className="textInput">
                                            <input className="textUser" type="text" placeholder="Phone number, username or Email" />
                                            <input className="textPassword" type="password" placeholder="Password" />
                                            <button className="LoginButton">Log in</button>
                                        </div>
                                        <div className="orLine">
                                            <div className="login_dividor"></div>
                                            <div className="login_or">OR</div>
                                            <div className="login_dividor"></div>
                                        </div>
                                        <div className="login_fb">
                                            <img className="fb_img" src={fb} />Log in with Facebook </div>
                                        <div className="login_forgot">Forgot Password?</div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                                <div className="loginpage_signupoption">
                                    <div className="loginPage_signin">
                                        Don't have an account? Sign up
                                    </div>
                                    <div className="loginPage_signup">
                                        Get the App.
                                    </div>
                                    <div className="app_links">
                                        <img src={appstore} width="135px" />
                                        <img src={playstore} width="135px" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Grid item xs={3}>

                        </Grid>

                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage;