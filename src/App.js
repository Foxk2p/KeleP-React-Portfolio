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
import Navbar from './components/Navbar'


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
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
