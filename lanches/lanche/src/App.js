import React from 'react';
import './assets/App.css';
import './assets/index.css';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Modalq from './Components/Modalq/Modalq';
import Modalp from './Components/Modalp/Modalp';
import Modalc from './Components/Modalc/Modalc';
import Clima from './Components/Clima/Clima';


function App(){
  return(
    <>
      < Nav />
      < Main />
      < Clima />
      < Footer />
      < Modalq />
      < Modalp />
      < Modalc />
    </>
  );
}

export default App;
