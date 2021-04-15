import './App.css';
// import Header from './Header'
import OpenMenu from './OpenMenu';
import {Switch, Route} from 'react-router'
import NavBar from './NavBar'
import SignIn from './SignIn'
import Footer from './Footer'
import Home from './Home';
import Sean from './trailers/Sean';
import Inception from './trailers/Inception'
import ImdbTV from './ImdbTV';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <NavBar />
        {/* <Header /> */}
      </div>

      <div className='page-body' >
        
        
        
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
        <Route exact path="/menu">
          <OpenMenu />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/Watchlist">
          <SignIn />
        </Route>
        <Route path="/Sean">
          <Sean />
        </Route>
        <Route path="/inception">
          <Inception />
        </Route>
        <Route path="/IMDbTv">
          <ImdbTV />
        </Route>

        </Switch>
        
      </div>
      <div className='footer-div'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
