import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import img from './triporate.png'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0}
    }
    
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid"  >
                    <Card shadow={5} >
                        <CardTitle className="mdl-card__title_ntt" style={{ color: 'fff', height: '176px' }}></CardTitle>
                        <CardText><h4 style={{color:'black',fontFamily: 'Roboto Mono,monospace'}}>NTT DATA</h4>Final project of my master</CardText>
                        <CardActions style={{backgroundColor:' #fc9c35'}}>
                            <Button style={{color:'  10px solid black'}} onClick={() => window.open('https://github.com/nicomontale/leroyMerlin-wizard', "_blank")}>GitHub</Button>
                            
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" onClick={() => window.open('https://www.Linkedin.com', "_blank")}style={{color: '#da7c18'}}/>
                        </CardMenu>
                    </Card>


                    <Card shadow={5} >
                        <CardTitle className="mdl-card__title_triporate" style={{ color: '#fff', height: '176px', }}></CardTitle>
                        <CardText><h4 style={{color:'black',fontFamily: 'Roboto Mono,monospace'}}>TRIPORATE</h4>Me with my masters companions
                        helped a startup in madrid during 3 days
                        of full immersion. </CardText>
                        <CardActions style={{backgroundColor:' #fc9c35'}}>
                            <Button style={{color:'  10px solid black'}} onClick={() => window.open('https://github.com/nicomontale/ProjectTriporateEnd', "_blank")}>GitHub</Button>
                            
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share"onClick={() => window.open('https://www.Linkedin.com', "_blank")}style={{color: '#da7c18'}}/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5}>
                        <CardTitle className="mdl-card__title_e_commerce" style={{ color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover' }}></CardTitle>
                        <CardText><h4 style={{color:'black', fontFamily: 'Roboto Mono,monospace'}}>E-COMMERCE STORE</h4> My first e-commerce site following an online course. </CardText>
                        <CardActions style={{backgroundColor:' #fc9c35'}}>
                            <Button style={{color:'  10px solid black'}} onClick={() => window.open('https://github.com/nicomontale/MontaleoneNicola', "_blank")}>GitHub</Button>
                            
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }} >
                            <IconButton name="share" onClick={() => window.open('https://www.Linkedin.com', "_blank")}style={{color: '#da7c18'}}/>
                        </CardMenu>
                    </Card>

                </div>







            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                        <CardTitle className="mdl-card__title_tesi"  style={{ color: 'black', height: '306px', backgroundImage: 'url('+{img}+') center / cover' }}></CardTitle>
                        <CardText ><h4 style={{color:'black', fontFamily: 'Roboto Mono,monospace'}}>
                        THESIS: COMPANY MANAGEMENT</h4>
                        The application allows you to provide a timely analysis regarding the work of the technician throughout 2018, in particular starting from accounting data, it will be possible to derive values ​​aimed at capturing the critical and optimal factors of the technicians and then carrying out training team. </CardText>
                        <CardActions style={{backgroundColor:' #fc9c35'}}>
                           <Button style={{color:'  10px solid black'}} onClick={() => window.open('https://github.com/nicomontale/MontaleoneNicola', "_blank")} >GitHub</Button>
                            <Button style={{color:'  10px solid black'}} onClick={() => window.open('https://www.youtube.com/watch?v=P-b95WS-11M', "_blank")}>Youtube</Button>
                            
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share"  onClick={() => window.open('https://www.Linkedin.com', "_blank")}style={{color: '#da7c18'}}>
                   </IconButton>
                        </CardMenu>
                    </Card>




                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs"  >
                <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab >React</Tab>
                    <Tab>Java</Tab>



                </Tabs>
                <section>
                    <Grid >
                        <Cell col={12} >
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>


            </div>
        )
    }
}
export default Project;