import styled from 'styled-components';
import React from 'react';
import NavBar from './Components/NavBar';
import BACKGROUND from './assets/images/background.png';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
function App() {
  return (
    <App.Wrapper>
      <div className='arrow sticky'> </div>
      <Router>
        <NavBar />
      
        <Switch>
          
            <Route path='/' component={Home}/>
             
          </Switch>
          </Router>
         
    </App.Wrapper>
  );
}

App.Wrapper = styled.div`
background-image: url(${BACKGROUND}) no-repeat  fixed;
background-blend-mode: multiply;
width: 100%;
margin: 0 auto;
.arrow{
  background: blue;
  z-index: 200;
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
`
export default App;
