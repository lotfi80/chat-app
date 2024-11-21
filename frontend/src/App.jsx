
import {Routes , Route}  from 'react-router-dom';

import Home from "./pages/home/Home";


import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";



function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center text-white">
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      

       </Routes>
        
        
      </div>
    </>
  );
}

export default App;
