import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/home/Home';
import SignIn from './components/signin/SignIn';
import Signup from './components/signup/Signup';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  </>
}

export default App;
