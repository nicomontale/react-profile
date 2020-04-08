import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0}
    }
    
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid" >
                    <Card shadow={5} style={{ minWidth: '450',justifyContent: 'space-around'}}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
                        Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
                        quando un anonimo tipografo prese una cassetta di caratteri e li assemblò
        per preparare un testo campione. </CardText>
                        <CardActions borders>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                    <Card shadow={5} style={{ minWidth: '450' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
                        Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
                        quando un anonimo tipografo prese una cassetta di caratteri e li assemblò
        per preparare un testo campione. </CardText>
                        <CardActions borders>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450'}}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
                        Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
                        quando un anonimo tipografo prese una cassetta di caratteri e li assemblò
        per preparare un testo campione. </CardText>
                        <CardActions borders>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>







            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '306px', background: 'url(https://icon-library.net/images/java-icon-image/java-icon-image-0.jpg) center / cover' }}></CardTitle>
                        <CardText >Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
                        Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
                        quando un anonimo tipografo prese una cassetta di caratteri e li assemblò
        per preparare un testo campione. </CardText>
                        <CardActions borders>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>




                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab >React</Tab>
                    <Tab>Java</Tab>



                </Tabs>
                <section>
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>


            </div>
        )
    }
}
export default Project;