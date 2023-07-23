import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';

import About from './components/About/About'
import SavedJob from './components/SavedJob/SavedJob';
// import Login from './components/Login/Login';
// import SignUp from './components/SignUp/SignUp';

import LogTest from './components/logTest';
import SignTest from './components/signTest';
import ProfTese from './components/profTese';
import NavBartLogin from './components/NavBarLogin/NavBarLogin';
import NavBarNotLog from './components/NavBarNotLog/NavBarNotLog';

function App() {
  return (
    <div className="App">
      {/* Uncomment the Routes section if needed */}

      <ProfTese />
      <NavBarNotLog />
      <h1>Helllllllllo Login</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/ProfTese' element={<ProfTese />} />
        <Route path='/SavedJob' element={<SavedJob/>}/>
        {/* <Route path='/Login' element={<Login />}/> */}
        {/* <Route path='/SignUp' element={<SignUp/>}/> */}
      </Routes>


      {/* <LogTest />
      <SignTest />
     */}

      

      {/* <Home /> */}
    </div>
  );

}
export default App;