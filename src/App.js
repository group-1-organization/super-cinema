import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavSection from './Components/NavSection';
import Container from 'react-bootstrap/Container';
import Home from './Components/Home/Home'
import Finder from './Components/FinderComponents/Finder'
import ContactUs from './Components/ContactUs/contactUs';

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
        <Route path="/contactus">
          <Container>
            <ContactUs />
          </Container>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
