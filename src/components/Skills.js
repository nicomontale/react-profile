import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';


class Skills extends Component {
    render() {
        return(
            <Grid className="mdl-progress_div">
            <Cell col={12}>
            <div className="meter"  style= {{display: 'flex'}}>{this.props.Skills} <ProgressBar  style= {{margin: 'auto', width: '55%', color: 'red',
           }}  progress={this.props.progress}/></div>
            </Cell>
            </Grid>
        )
    }
}
export default Skills