import './App.css';
import logo from './img/misuse-3.png'
import ListaTareas from './componentes/listaTareas';

function App() {
  return (
    <div className="app-tareas">
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo'
        />
      </div>
      <div className='tareas-listas'>
        <h1>Mis Tareas</h1>
          <ListaTareas />
      </div>
    </div>
  );
}

export default App;
