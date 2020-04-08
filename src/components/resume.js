import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import img1 from '../components/react-me.png';
class Resume extends Component {
    render() {
        return(
        <div>
        <Grid style={{backgroundColor: ' #fc9c35'}}>
        <Cell col={4}> 
        <div  style={{textAlign:'center', }}>
        <img src={img1}
        alt="avatar"
        style={{height:'200px'}}
        />
        
        </div>
        <h2 style={{paddingTop: '1em'}}> Nicola Montaleone</h2>
        <h4 style={{color: 'black', fontSize:'2em'}}>Junior  developer</h4>
        <hr style={{borderTop: '3px solid black', width: '50%'}}   />
        <p>Highly reliable junior developer with a strong work ethic. Sport is my strength; I love basketball and soccer. I am a person with great personal motivation and a spirit of initiative.
        I adore traveling and discovering something new every day! </p>
        <hr style={{borderTop: '3px solid black', width: '50%'}}   />
        <h5>Adress</h5>
        <p>Via Ozieri, 17</p>
        <p>Torino, IT</p>
        <h5>Phone</h5>
        <p>+39 3409158662</p>
        <h5>Email</h5>
        <p><a style={{ color: "black"}} href="mailto:nicola.montaleone95@gmail.com" target="_top">Email: nicola.montaleone95@gmail.com</a></p>
        </Cell>
        <Cell col={8} className="resume-right-col">
        <h2>Education</h2>
        <Education 
        startYear= {2019}
        endYear={2020}
        schoolName="Talent Garden Innovation School"
        schoolDescription="During the master I was able to deepen my knowledge in React." />
        <Education 
        startYear= {2020}
        endYear={2020}
        schoolName="PCM"
        schoolDescription="Junior Java Developer" />

        <Education 
        startYear= {2014}
        endYear={2019}
        schoolName="Politecnico Di Torino"
        schoolDescription="Bachelor's degreeCampo di studiManagement Engineering (IT branch)" />

        <Education 
        startYear= {2009}
        endYear={2014}
        schoolName="Liceo Scientifico Galileo Ferraris"
        schoolDescription="Diploma" />

        <hr style={{borderTop:'3px solid black'}} />

        <h2>Experience</h2>
        <Experience 
        startYear={2020}
        jobsName="Junior Developer"
        jobsDescriptions="Back-end Developer"
        />

        <Experience 
        startYear={2013}
        endYear={2016}
        jobsName="Junior Social Media Manager"
        jobsDescriptions="With some of my friends we tried to start a clothing brand."
        />
        <hr style={{borderTop:'3px solid black'}} />
        <h2>Skills</h2>
        <Skills
        Skills="JAVA"
        progress={80}
        />
        <Skills
        Skills="REACT"
        progress={65}
        /> <Skills
        Skills="MySQL"
        progress={75}
        /> <Skills
        Skills="ECLIPSE"
        progress={75}
        /> 
        </Cell>
        
        
        </Grid>
        
        
        </div>
        )
    }
}
export default Resume;