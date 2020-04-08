import React from 'react';
import {Layout, Header, Navigation, Drawer, Content, } from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            isOpen : false
        }
        
    }
    close() {
        var d = document.querySelector('.mdl-layout');
        d.MaterialLayout.toggleDrawer();
      }
   
        
    render() {
    
   
  return (
    
   
<div className="demo-big-content">
<Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color:'white'}} to="/">Nicola Montaleone</Link>} sroll>
        <Navigation>
            <Link  style={{textDecoration:'white'}} to="/resume">RESUME</Link>
            <Link style={{textDecoration:'white'}} to="/project">PROJECTS</Link>
          
        </Navigation>
    </Header>
    <Drawer variant="temporary" className="drawer-color"  title={<Link style={{textDecoration: 'none', color:'black'}} to="/">Nicola Montaleone</Link>} sroll>
        <Navigation>
        <Link onClick={()=>document.querySelector('.mdl-layout__drawer').addEventListener('click', this.close())}  style={{textDecoration:'white', color:'black'}} to="/resume">RESUME</Link>
        <Link onClick={()=>document.querySelector('.mdl-layout__drawer').addEventListener('click', this.close())}  style={{textDecoration:'white',color:'black'}} to="/project">PROJECTS</Link>
        
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
}

export default App;
