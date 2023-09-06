import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';


import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
    <header className='App-header'>
          <h2>Friends Database</h2>
          <div className='Link-container'>
          <Link className='link' to="/login">Login</Link>
          <Link className='link' to="/friends">Friends List</Link>
          <Link className='link' to="/friends/add">Add Friends</Link>
          <Link className='link' to="/logout">Logout</Link>
          </div>
        </header>

        <Routes>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>

          <PrivateRoute exact path='/friends' component={FriendsList}/>

          <PrivateRoute exact path='/friends/add'component={AddFriend}/>

          <PrivateRoute exact path='/logout'component={Logout}/>

        </Routes>
      </div>
  );
}

export default App;
