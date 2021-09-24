
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
import CreateNote from './screens/CreateNote/CreateNote';

const App=()=> (
  <Router>
  <Header className="Header"/>

  <main> 
  <Route path='/' component={LandingPage} exact /> 
  <Route path='/register' component={RegisterScreen}  /> 
  <Route path='/createnote' component={CreateNote}  /> 
  <Route path='/login' component={LoginScreen} /> 
  <Route path='/mynotes' component={()=> <MyNotes/>}  /> 
</main>
  

  <Footer/>

  </Router>
)

export default App;
