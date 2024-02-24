import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';
import { fetchGreeting } from './redux/slices/greeting/greetingSlice';

// Define your App component
function App() {
  return (
    <Router>
      <div className="text-center text-red-800">
        <Switch>
          {/* Route for the Greeting component */}
          <Route path="/greeting" component={Greeting} />
          {/* You can add more routes here if needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;