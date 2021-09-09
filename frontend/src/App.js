
import './App.css';
import Footer from './components/Foooter/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import MyNotes from './screens/LandingPage/MyNotes/MyNotes';

const App=()=> (
  <Router>
  <Header className="Header"/>

  <main> 
  <Route path='/' component={LandingPage} exact /> 
  <Route path='/mynotes' component={()=> <MyNotes/>} exact /> 
</main>
  

  <Footer/>

  </Router>
)

export default App;
