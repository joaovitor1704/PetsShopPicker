import './App.css';
import Formulario from './pages/home.js';
import Escolha from './pages/escolha';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoreContext from './Store/Context.jsx';
import StoreProvider from './Store/Provider.jsx';

function App() {
  return (
    <StoreProvider>
      <Router> 
        <Routes>
          <Route path="/" element={<Formulario />}/>
          <Route path="Escolha" element={<Escolha />}/>
        </Routes>        
      </Router>
    </StoreProvider>
    
  );
}

export default App;
