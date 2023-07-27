import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import NavBarNotLog from './components/NavBarNotLog/NavBarNotLog';
import UserProfile from './components/Profile/Profile';
import SavedCard from './components/SavedCard/SavedCard';
import CustomCard from './components/CustomCard/CustomCard';
function App() {
  return (
    <div >
      <NavBarNotLog />
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/UserProfile' element={<UserProfile/>}/>
        <Route path='/SavedJob' element={<SavedCard/>}/> 
        {/* <Route path='/' element={<CustomCard/>}/>  */}
      </Routes>
      <Footer/>
    </div>
  );

}
export default App;