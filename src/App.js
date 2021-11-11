import './App.css';
import Nav from './components/Navigation';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Clearances from './components/Clearances';
import ContactUs from './components/Contact';
import Faq from './components/Faq';
import Import from './components/importClearances';
import Export from './components/exportClearances';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
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
