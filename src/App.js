import './App.css';
import Nav from './components/Navigation';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OurServices from './components/OurServices';
import Clearances from './components/Clearances';
import ContactUs from './components/Contact';
import Faq from './components/Faq';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/our-services' component={OurServices} />
          <Route path='/clearances' component={Clearances} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/faq' component={Faq} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
