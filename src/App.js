import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import SavedJob from './components/SavedJob/SavedJob';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/SavedJob' element={<SavedJob/>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}
export default App;