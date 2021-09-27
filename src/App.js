import './App.css';
import Home from './routeComponents/Home';
import { Route } from 'react-router';
import Login from './routeComponents/Login';
import Signup from './routeComponents/Signup';

function App() {
  return (
    <div className="App bg-secondary">
      <Route exact path='/signup' render={(props) => <Signup {...props} />} />
      <Route exact path='/login' render={(props) => <Login {...props} />} />
      <Route exact path='/home' render={(props) => <Home {...props} />} />

      
    </div>
  );
}

export default App;
