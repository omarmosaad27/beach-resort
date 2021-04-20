import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/rooms/">
            <Rooms/>
          </Route>
          <Route exact path="/rooms/:slug">
            <SingleRoom/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
