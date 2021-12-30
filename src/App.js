import styled from 'styled-components';
import React from 'react';
import NavBar from './Components/NavBar';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Team from './Components/Pages/Team';
import Contact from './Components/Pages/Contact';
// import Footer from './Components/Footer';
import Faq from './Components/Pages/Faq'
import Blog from "./Components/Pages/Blog"
import About from "./Components/Pages/About"
import VariableData from './Components/Pages/VariableData';
import Thermal from './Components/Pages/Thermal';
import Brands from './Components/Pages/Brands';
import SecurePrints from './Components/Pages/SecurePrints';
import News from './Components/Pages/News';
import Commercial from './Components/Pages/Commercial';

import Envelope from './Components/Pages/Envelope';
import Gallery from './Components/Pages/Gallery';
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
            <Route path={"/About"} exact component={About} />
             <Route path={"/Blog"} exact component={Blog} />
             <Route path={"/gallery"} exact component={Gallery} />
             <Route path={"/VariableData"} exact component={VariableData} />
             <Route path={"/commercialPrints"} exact component={Commercial} />
             <Route path={"/Envelope"} exact component={Envelope} />
             <Route path={"/Thermal"} exact component={Thermal} />
             <Route path={"/Brands"} exact component={Brands} />
             <Route path={"/Secureprints"} exact component={SecurePrints } />
             <Route path={"/news"} exact component={News} />
          </Switch>
          {/* <Footer /> */}
          </BrowserRouter>
         
    </App.Wrapper>
  );
}

App.Wrapper = styled.div`

width: 100%;
margin: 0 auto;

`
export default App;
