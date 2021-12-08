import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './Pages/Shared/Sidebar/Sidebar';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About/About';
import Services from './Pages/Services/Services/Services';
import Projects from './Pages/Projects/Projects/Projects';
import Contact from './Pages/Contact/Contact/Contact';
import WebDesign from './Pages/Projects/Web Design/WebDesign'
import Blogs from './Pages/Blogs/Blogs';
import Messenger from './Pages/Home/Messenger/Messenger'

function App() {
  return (
    <div style={{ backgroundColor: "#f2f2fc" }}>
      <BrowserRouter>
        <Sidebar />
        <Messenger />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/project/:id">
            <WebDesign />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
