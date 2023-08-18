
import { Link } from 'react-router-dom'
import './App.css'
import CustomRoutes from './Routes/CustomRoutes'

function App() {
  

  return (
    <>
      <h1 id="pokedex-height">
        <Link to="/">Pokedex</Link></h1>
      <CustomRoutes/>
    </>
  )
}

export default App
