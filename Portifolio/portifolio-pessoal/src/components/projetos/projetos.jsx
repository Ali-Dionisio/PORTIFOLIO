import './projetos.css'
import Transformando from "../../assets/Transformandoprodutos.png"
import SuaCasa from "../../assets/SuaCasa.png"
import board from "../../assets/board.png"
import dnc from "../../assets/dnc.png"

function Projetos() {
    return (
    <>
    <div className='projetos'>
      <div className='galeria'>
        <div className='caixa'>
          <div>
             <img src={Transformando} height={"140px"} width={"240px"} /> 
          </div>
          <div>
              <h3>Transformando Produtos Digitais</h3>
              <p>LandPage responsiva, utilizando HTML e CSS</p>
          </div>
          <div>
            <a href="https://aesthetic-profiterole-f9beec.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className='btnCliqueAqui'>Clique aqui</button>
            </a>  
          </div>
        </div> 
        <div className='caixa'>
          <div>
             <img src={SuaCasa} height={"140px"} width={"240px"} /> 
          </div>
          <div>
              <h3>Sua casa de um jeito único</h3>
              <p>Utlização de react e javascript (LocalStorage, SessionStorage e ContextAPI) </p>
          </div>
          <div>
            <a href="https://dnc-arq-alisson-almeida.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className='btnCliqueAqui'>Clique Aqui</button>
            </a>
          </div>
        </div> 
        <div className='caixa'>
          <div>
            <img src={board} height={"140px"} width={"240px"} /> 
          </div>
          <div>
              <h3>Board de tarefas</h3>
              <p>Utilizando javascript</p>
          </div>
          <div>
            <a href="https://67c62a067fbc5febd0bc2dc4--transcendent-eclair-03ed21.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className='btnCliqueAqui'>Clique aqui</button>
            </a>
          </div>
        </div> 
        <div className='caixa'>
          <div>
            <img src={dnc} height={"140px"} width={"240px"} /> 
          </div>
          <div>
              <h3>Replicando site DNC</h3>
              <p>Utilizando HTML e CSS </p>
          </div>
          <div>
            <a href="https://lp-dnc-alidionisio.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className='btnCliqueAqui'>Clique aqui</button>
            </a>
          </div>
        </div> 
     </div>
    </div>

    </>
  )
}

export default Projetos
