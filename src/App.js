import Cadastro from './Components/Cadastro';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
