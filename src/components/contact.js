import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
        <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={6}>
        <h2>Nicola Montaleone</h2>
        <img
        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-128.png"
        alt="avatar"
        style= {{height: '250px'}}
        />
        <p style= {{width: '75%', margin:'auto', paddingTop:'1em'}}>Highly reliable junior full stack developer with a strong work ethic. Sport is my strength; I love basketball and soccer. I am a person with great personal motivation and a spirit of initiative.
        I adore traveling and discovering something new every day! </p>
        </Cell>
        <Cell col={6}>
        <h2>Contact me</h2>
        <hr/> 
        <div className="contat-list">
        <List>
        <ListItem>
          <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
          <i className="fa fa-phone-square" aria-hidden="true"/> +39 3409158662</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
          <i className="fa fa-envelope" aria-hidden="true"/> nicolamontaleone95@gmail.com</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
          <i className="fa fa-skype" aria-hidden="true"/> live:.cid.c05d9deee16b9db</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
          <i className="fa fa-linkedin-square" aria-hidden="true"/> Nicola Montaleone</ListItemContent>
        </ListItem>
        
      </List>
        
        </div>
        
        
        </Cell>
        
        
        </Grid>
        
        
        </div>
        )
    }
}
export default Contact;