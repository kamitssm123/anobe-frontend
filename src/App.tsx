import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </Router>
  );
}

export default App;
