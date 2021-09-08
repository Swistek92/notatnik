
import './App.css';
import Footer from './components/Foooter/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';

const App=()=> (
  <>
  <Header className="Header"/>

  <main>
  <LandingPage/>

  </main>

  <Footer/>

  </>
)

export default App;
