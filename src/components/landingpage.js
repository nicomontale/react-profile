import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png'
                            alt="avatar"
                            className="avatar-image" />
                        <div className="banner-text">
                            <h1>Junior Developer</h1>

                            <hr />
                            <p>JAVA   |    SQL   |   REACT     </p>
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/nicola-montaleone-7a3202194/" rel="noopener noreferrer" target="_black">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/nicomontale" rel="noopener noreferrer" target="_black">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;