import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import SavedJob from './components/SavedJob/SavedJob';
import Footer from './components/Footer/Footer'
import ProfTese from './components/profTese';
import NavBarNotLog from './components/NavBarNotLog/NavBarNotLog';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      {/* <ProfTese /> */}
      <NavBarNotLog />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/ProfTese' element={<ProfTese />} />
        <Route path='/SavedJob' element={<SavedJob />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );

}
export default App;