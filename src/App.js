import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavSection from './Components/NavSection';
import Container from 'react-bootstrap/Container';
import Home from './Components/Home/Home';
import Finder from './Components/FinderComponents/Finder';
import About from './Components/About';

function App() {
  return (
    <Router>
      <NavSection />
      <Switch>
        <Route exact path="/">
          <Container>
            <Home />
          </Container>
        </Route>
        <Route path="/finder">
          <Container>
            <Finder />
          </Container>
        </Route>
        <Route path="/about">
          <Container>
            <About />
          </Container>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
