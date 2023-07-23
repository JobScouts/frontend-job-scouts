import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import SavedJob from './components/SavedJob/SavedJob';
// import Login from './components/Login/Login'; // Import the component for the Login page


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/SavedJob' element={<SavedJob/>}/>
        {/* <Route path="/login" component={<Login/>} /> */}
      </Routes>
    </div>
  );
}
export default App;