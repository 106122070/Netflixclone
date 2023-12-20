
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Backgroundimage from './components.js/Backgroundimage';
import HeaderPage from './components.js/HeaderPage';
import Netflix from './pages/Netflix';
import Mylist from './pages/Mylist';
import Player from './pages/Player';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LogIn/>}/>
        <Route exact path='/mylist' element={<Mylist/>}/>
        <Route exact path='/' element={<Netflix/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route  path='/player' element={<Player/>}/>    
        <Route  path='/player/:id' element={<Player/>}/>    
        <Route exact path='/headerpage' element={<HeaderPage/>}/>
        <Route exact path='/Homepage' element={<Backgroundimage/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
