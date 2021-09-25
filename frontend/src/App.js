
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
import SingleNote from './screens/SingleNote/SingleNote';
import { useState } from 'react';

const App=()=> {
  const [search, setSearch] = useState("");
console.log(search)

 return ( 

<Router>
  <Header setSearch={(s) => setSearch(s)}  />

  <main> 
  <Route path='/' component={LandingPage} exact /> 
  <Route path='/login' component={LoginScreen} /> 
  <Route path='/register' component={RegisterScreen}  /> 
  <Route path='/createnote' component={CreateNote}  /> 
  <Route path='/note/:id' component={SingleNote} /> 
  <Route path='/mynotes' component={()=> <MyNotes search={search}/>}  /> 
</main>
  

  <Footer/>

  </Router>
 )
}


export default App;
