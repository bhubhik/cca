import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Clearances from './pages/Clearances';
import ContactUs from './pages/Contact';
import Faq from './pages/Faq';
import Import from './pages/importClearances';
import Export from './pages/exportClearances';
import NavBar from './components/Navbar/Navigation';
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/clearances' component={Clearances} />
          <Route path='/import-clearances' component={Import} />
          <Route path='/export-clearances' component={Export} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/faq' component={Faq} />
        </Switch>
      </BrowserRouter>
      <footer>Customs and Cargo Administrators Pty Ltd 2021 ©</footer>
    </div>
  );
}

export default App;
