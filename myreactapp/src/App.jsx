import Topbar from './components/Topbar'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <><Topbar />
      <Router>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <AboutMe />
      <Resume />
      <Contact />
    </>
  );
}

export default App;



