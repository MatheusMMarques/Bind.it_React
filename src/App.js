import Cadastro from './Components/Cadastro';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/g' element={<Home/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
