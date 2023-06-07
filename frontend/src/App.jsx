import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Test from './pages/Test';
import Collection from './pages/Collection'
import RequestForm from './pages/Request';
import Admin from './pages/admin';

// TODO: ask someone for help with this comment (Ikkue)
function App() {
  const token = localStorage.getItem('accessToken');
  // console.log("Token: " + token);
  return (
    <Routes>
        {/* {token && <Route path="/" element={<Navigate to="/home" replace />} />} */}
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/request" element={<RequestForm/>}/>
        <Route path='/test' element={<Admin/>}/>
    </Routes>
  );
}

export default App;
