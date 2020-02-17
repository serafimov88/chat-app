import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from './components/Join';
import Chat from './components/Chat';

const App = () => (
    <Router>
        <Route exact path="/" component={Join} />
        <Route path="/chatroom" component={Chat} />
    </Router>
);

export default App;
