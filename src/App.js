import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import axios from 'axios';
import Tech from './Tech';
import Contracts from './Contracts';
import Work from './Work';
import About from './About';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import logo from './logo.svg';
import './App.css';

function useNameGreeting(name) {
  const [greeting, setGreeting] = useState(`Hello, ${name}`);
  useEffect(() => {
    async function getGreeting() {
      const response = await axios.get(`/api/hello?name=${name}`);
      setGreeting(response.data.greeting);
    }
    getGreeting();
    // this is not necessary for this effect, it's just to record what's happening
    return () => console.log('Cleanup of useEffect', name);
  }, [name]);
  return greeting;
}

function App() {
  const [name, setName] = useState('');
  const greeting = useNameGreeting(name);

  const [friends, setFriends] = useState([]);
  useEffect(() => {
    async function getFriends() {
      const response = await axios.get('/api/friends');
      setFriends(response.data);
    }
    getFriends();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contracts">Contracts</NavLink>
              </li>
              <li>
                <NavLink to="/work">Work</NavLink>
              </li>
              <li>
                <NavLink to="/tech">Tech</NavLink>
              </li>
            </ul>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <TransitionGroup>
            <CSSTransition
              key={true}
              classNames="fade"
              timeout={300}
            >
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contracts">
                  <Contracts />
                </Route>
                <Route path="/work">
                  <Work />
                </Route>
                <Route path="/tech">
                  <Tech />
                </Route>
                <Route path="/">
                  <h1>{greeting}</h1>
                  <button onClick={() => setName('Nisse')}>Nisse</button>
                  <button onClick={() => setName('Pelle')}>Pelle</button>
                  <button onClick={() => setName('Kalle')}>Kalle</button>
                  <select value={name} onChange={e => setName(e.target.value)}>
                    {friends && friends.map(friend => (
                      <option key={friend.id} value={friend.name}>
                        {friend.name}
                      </option>
                    ))}
                  </select>
                  <section className="explanation-section">
                    <h2>Testing and learning React Hooks</h2>
                    <p>Making use of a custom hook called <code>useNameGreeting</code>, <code>useEffect</code>, <code>useState</code> and axios.</p>
                  </section>
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </main>
      </div>
    </Router>
  );
}

export default App;
