
import BarNav from './Componentes/BarNav';
import { CuerpoApi } from './Componentes/CuerpoApi';
import Formulario from './Componentes/Formulario';
import { Header } from './Componentes/Header';
import { Importaciones } from './Componentes/Importaciones';
import PiePagina from './Componentes/PiePagina';
import { Promociones } from './Componentes/Promociones';
import SeccionContacto from './Componentes/SeccionContacto';
import SeccionJuegos from './Componentes/SeccionJuegos';
import './index.css';


function App() {

  return ( 
    <div className='background-web'>  
     <Importaciones/>
     <BarNav />
      <div > 
        <Header/>
      </div>
      <div>
        <SeccionJuegos/>
      </div>
      <div>
        <Promociones/>
      </div>
      <div>
        <SeccionContacto/>
      </div>
      <div>
        <Formulario/>
      </div>
      <div>
        <PiePagina/>
      </div>
      <div className='container card'>
        <div>
          <h1 className='text-center'>Bienvenido al generador de numeros al AZAR de RANDOM.ORG</h1>
          <CuerpoApi/>
        </div>
      </div>
     
    </div>

    //hasta esta parte es funcional no modificar sin dejar la OBSERVACION

      
  );
}

export default App;




/*



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './Componentes/Componente1'
import Componente2 from './Componentes/Componente2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Componente1 />
      <Componente2 />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
