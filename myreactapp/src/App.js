import Navbar from './components/Navbar.js'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

function App() {
  return (
    <><Navbar /><Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router></>
  );
}

export default App;



