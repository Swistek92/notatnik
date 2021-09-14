
import './App.css';
import Footer from './components/Foooter/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/LandingPage/MyNotes/MyNotes';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

const App=()=> (
  <Router>
  <Header className="Header"/>

  <main> 
  <Route path='/' component={LandingPage} exact /> 
  <Route path='/register' component={RegisterScreen} exact /> 
  <Route path='/login' component={LoginScreen} exact /> 
  <Route path='/mynotes' component={()=> <MyNotes/>} exact /> 
</main>
  

  <Footer/>

  </Router>
)

export default App;
