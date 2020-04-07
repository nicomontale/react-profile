import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';
function App() {
  return (
    
   
<div className="demo-big-content">
<Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color:'white'}} to="/">Nicola Montaleone</Link>} sroll>
        <Navigation>
            <Link to="/resume">RESUME</Link>
            <Link to="/project">PROJECTS</Link>
            <Link to="/contact">CONTACTS</Link>
        </Navigation>
    </Header>
    <Drawer title={<Link style={{textDecoration: 'none', color:'black'}} to="/">Nicola Montaleone</Link>} sroll>
        <Navigation>
        <Link to="/resume">RESUME</Link>
        <Link to="/project">PROJECTS</Link>
        <Link to="/contact">CONTACTS</Link>
        </Navigation>
    </Drawer>
    <Content>
        <div className="page-content" />
        <Main/>
    </Content>
</Layout>
</div>
  );
}

export default App;
