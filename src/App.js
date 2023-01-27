import './App.css';
import freCodeCampLogo from './images/freecodecamp-logo.png';
import TareaFormulario from './components/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freCodeCampLogo} 
        className='freecodecamp-logo' 
        alt='logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
       <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
