import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import NavBarNotLog from './components/NavBarNotLog/NavBarNotLog';
import UserProfile from './components/Profile/Profile';
import SavedCard from './components/SavedCard/SavedCard';
import UpdateComponent from './components/updte/UpdateComponent'
// import Test from './components/Test/Test'

function App() {
  return (
    <div className="App">
      <NavBarNotLog />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/UserProfile' element={<UserProfile/>}/>
        <Route path='/SavedJob' element={<SavedCard/>}/>
      </Routes>
      {/* <UpdateComponent/> */}
      {/* <Test/> */}
      <Footer/>
    </div>
  );

}
export default App;