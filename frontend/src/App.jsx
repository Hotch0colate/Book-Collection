import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Test from './pages/Test';
import Collection from './pages/Collection'
import RequestForm from './pages/Request';
import Admin from './pages/admin';
import AddBook from './pages/Addbook';
import RemoveBook from './pages/Removebook';
import { checkTokenExpire } from './services/request';


// TODO: ask someone for help with this comment (Ikkue)
function App() {
  const [isValidToken, setIsValidToken] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    checkTokenExpire().then((res) => {
      setIsValidToken(res)
      setIsLoaded(true)
    })
    }, [location]);
  
  return isLoaded ? (
    <Routes>
        {/* no need token */}
        {!isValidToken && <>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/*" element={<Navigate to="/" replace />} /></>}
        
        {/* need token */}
        {isValidToken && <> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/request" element={<RequestForm/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/addbook" element={<AddBook/>}/>
        <Route path="/removebook" element={<RemoveBook/>}/>
        
        <Route path="/*" element={<Navigate to="/home" replace />} /></>}
        
        {/* <Route path='/test' element={<Admin/>}/> */}
    </Routes>
  ) : null;
}

export default App;
