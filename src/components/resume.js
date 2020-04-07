import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
class Resume extends Component {
    render() {
        return(
        <div>
        <Grid>
        <Cell col={4}> 
        <div  style={{textAlign:'center', }}>
        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
        alt="avatar"
        style={{height:'200px'}}
        />
        
        </div>
        <h2 style={{paddingTop: '2em'}}> Nicola Montaleone</h2>
        <h4 style={{color: 'grey'}}>Junior full stack developer</h4>
        <hr style={{borderTop: '3px solid #8338b2', width: '50%'}}   />
        <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum</p>
        <hr style={{borderTop: '3px solid #8338b2', width: '50%'}}   />
        <h5>Adress</h5>
        <p>Via Ozieri, 17</p>
        <h5>Phone</h5>
        <p>3409158662</p>
        <h5>Email</h5>
        <p>nicolamontaleone95@gmail.com</p>
        </Cell>
        <Cell col={8} className="resume-right-col">
        <h2>Education</h2>
        <Education 
        startYear= {2019}
        endYear={2020}
        schoolName="Talent Garden Innovation School"
        schoolDescription="During the master I was able to deepen my knowledge in Javascript and React." />

        <Education 
        startYear= {2014}
        endYear={2019}
        schoolName="Politecnico Di Torino"
        schoolDescription="Learning of economic, IT and relevant programming concepts, such as Java, MySQL, C, HTML, CSS, PHP." />

        <Education 
        startYear= {2009}
        endYear={2014}
        schoolName="Liceo Scientifico Galileo Ferraris"
        schoolDescription="Diploma" />

        <hr style={{borderTop:'3px solid green'}} />

        <h2>Experience</h2>
        <Experience 
        startYear={2013}
        endYear={2016}
        jobsName="Euphoria Brand"
        jobsDescriptions="With some of my friends we tried to start a clothing brand."
        />
        <hr style={{borderTop:'3px solid green'}} />
        <h2>Skills</h2>
        <Skills
        Skills="JAVA"
        progress={80}
        />
        <Skills
        Skills="REACT"
        progress={65}
        /> <Skills
        Skills="SQL"
        progress={75}
        /> <Skills
        Skills="JAVASCRIPT"
        progress={60}
        /> <Skills
        Skills="ECLIPSE"
        progress={75}
        /> <Skills
        Skills="MVC"
        progress={90}
        /> 
        </Cell>
        
        
        </Grid>
        
        
        </div>
        )
    }
}
export default Resume;