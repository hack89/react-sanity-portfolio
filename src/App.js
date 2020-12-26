import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Project from './components/Project'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
      </Switch>
    </Router>
  );
}

export default App;
