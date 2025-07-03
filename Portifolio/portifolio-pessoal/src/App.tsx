import './App.css'
import Navbar from "./components/navbar/navbar.jsx"
import Resumo from "./components/resumo/resumo.jsx"
import Rodape from "./components/rodape/rodape.jsx"
import Projetos from "./components/projetos/projetos.jsx"
import LinhaTempo from "./components/linhaTempo/LinhaTempo.jsx"
function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Resumo/>
        <Projetos/>
        <LinhaTempo/>
        <Rodape/>
      </div> 
    </>
  )
}

export default App
