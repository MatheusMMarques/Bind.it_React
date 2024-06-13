import Cadastro from './Components/Cadastro';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Login from './Components/Login';
import Visao from './Components/Visao';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/login'tro element={<Login/>}/>
        <Route path='/visao'tro element={<Visao/>}/>
        <Route path='/dashboard'tro element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
