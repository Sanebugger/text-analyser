
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch }
  from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('light');
  const Togglemode = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.body.style.backgroundColor = 'black';
    } else {
      setTheme('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
        {/*<Navbar title="textUtils" pageName="about"/> */}
        <Navbar Mode={theme} toggle={Togglemode} />       {/* yha pr, props aur hooks dono concept ka use krliya,WOWOWOWOWOWOWOWOWOW */}
        <Switch>
          <Route exact path="/"> <div className="container my-3" >
                                            <TextForm heading="Enter the text to analyze" /> </div></Route>
          <Route exact path="/about"> <About /> </Route>
        </Switch>
      </Router>



      {/*<About/>*/}
    </>
  );
}

export default App;



//above in the first, <navbar/> component, default props will work i.e.
//                                                                   Navbar.defaultProps = {  title:'textUtils',
//                                                                                            pageName:'homePage'  };

