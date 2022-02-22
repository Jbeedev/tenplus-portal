import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Access/Login';
import Signup from './Components/Access/Signup';
import Show from './Components/Show/Show';
import Index from './Components/Index/Index';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Faq from './Components/Faq/Faq';
import Skill2022 from './Components/Skill-acquisition2022';
// import Test from './Components/Test/Test';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Index } />
          <Route path='/login' component={ Login } />
          <Route path='/signup' component={ Signup } />
          <Route path='/contact' component={ Contact } />
          <Route path='/faq' component={ Faq } />
          <Route path='/skill' component={ Skill2022 } />
          <Index /> 
          <Show />
          <Skill2022 />
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
