import styled from 'styled-components';
import React from 'react';
import NavBar from './Components/NavBar';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Team from './Components/Pages/Team';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer';
import Faq from './Components/Pages/Faq'
import Blog from "./Components/Pages/Blog"
function App() {
  return (
    <App.Wrapper>
      <div className='arrow sticky'> </div>
      <BrowserRouter>
        <NavBar />
      
        <Switch>
          
            <Route path='/' exact component={Home}/>
            <Route path='/team' exact component={Team} />
            <Route path={'/contact'} exact component={Contact} />
            <Route path={"/Faq"} exact component={Faq}/>
             <Route path={"/Blog"} exact component={Blog} />
          </Switch>
          <Footer />
          </BrowserRouter>
         
    </App.Wrapper>
  );
}

App.Wrapper = styled.div`

width: 100%;
margin: 0 auto;

`
export default App;
