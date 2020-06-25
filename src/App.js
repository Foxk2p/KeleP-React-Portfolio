import React from 'react'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Page One</Link>
          <Link to="/pagetwo">Page Two</Link>
        </nav>
        <Switch>

          <Route exact path="/">
            <PageOne />
          </Route>
          <Route path="/pagetwo">
            <PageTwo />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App
