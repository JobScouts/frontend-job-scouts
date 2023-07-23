import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import SavedJob from './components/SavedJob/SavedJob';
import LogTest from './components/logTest';
import SignTest from './components/signTest';
import ProfTese from './components/profTese';
import NavBarNotLog from './components/NavBarNotLog/NavBarNotLog';

function App() {
  return (
    <div className="App">
      {/* <ProfTese /> */}
      <NavBarNotLog />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/ProfTese' element={<ProfTese />} />
        <Route path='/SavedJob' element={<SavedJob/>}/>
      </Routes>
    </div>
  );

}
export default App;