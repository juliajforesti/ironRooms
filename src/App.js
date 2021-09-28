import './App.css';
import Home from './routeComponents/Home';
import { Route } from 'react-router';
import Login from './routeComponents/Login';
import Signup from './routeComponents/Signup';
import Room from './routeComponents/Room';
import Navbar from './components/Navbar';
import RoomForm from './routeComponents/RoomForm';

function App() {
  return (
    <div className="App bg-secondary vh-100">
      <Navbar />
      <Route exact path='/signup' render={(props) => <Signup {...props} />} />
      <Route exact path='/login' render={(props) => <Login {...props} />} />
      <Route exact path='/home' render={(props) => <Home {...props} />} />
      <Route exact path='/room/form' render={(props) => <RoomForm {...props} />} />
      <Route exact path='/room/form/:roomId' render={(props) => <RoomForm {...props} />} />
      <Route exact path='/rooms/:roomId' render={(props) => <Room {...props} />} />
    </div>
  );
}

export default App;
