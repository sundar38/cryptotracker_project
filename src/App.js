import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>   
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
