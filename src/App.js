import { Route, Routes } from 'react-router-dom';
// import Main from './components/pages/main';
import SideBar from './components/Sidebar/SideBar';
import Asteroids from "./pages/Asteroids/Asteroids";
import Home from "./pages/Home/Home";
import Astronomy_Picture from './pages/Astronomy_Picture/Astronomy_Picture';
import New_Planet from './pages/New_Planet/New_Planet';
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'
function App() {
 
  return (
   <>
    <SideBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/asteroids' element={<Asteroids />} />
      <Route path='/apod' element={<Astronomy_Picture />} />
      <Route path='/new_planet' element={<New_Planet />} />
    </Routes>
   </>

  );
}

export default App;
