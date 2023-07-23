import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import SavedJob from './components/SavedJob/SavedJob';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/SavedJob' element={<SavedJob/>}/>
      </Routes>
    </div>
  );
}
export default App;