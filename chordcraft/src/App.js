import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// import Contact from './components/Contact';
import Generate from './components/Generate';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div>

          <Routes>
            <Route exact path='/Home' element={<Home />} />
            <Route exact path='/generate' element={<Generate />} />
            <Route exact path='/about' element={<About />} />
            {/* <Route exact path='/Contact' element={<Contact/>} /> */}

          </Routes>

        </div>
        <Footer />
      </Router>

    </>
  );
}

export default App;
