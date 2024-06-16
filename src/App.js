import './App.css';
import ListaPersonajes from './Hooks/MultipleHooks/ListaPersonajes';
import MultipleHooks from './Hooks/MultipleHooks/MultipleHooks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {



  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<ListaPersonajes></ListaPersonajes>}/>
          <Route path='/personaje/:id' element={<MultipleHooks></MultipleHooks>}/>
         



        </Routes>
      </Router>

    </div>
  );
}
//COLOCAR EL DE REGRESO Y SIGUIENTE
export default App;
