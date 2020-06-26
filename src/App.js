import React from 'react'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Bio from './pages/Bio'


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Bio</Link>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
        <Switch>

          <Route exact path="/">
            <Bio />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App
