import './navbar.css'
import Linkedin from "../../assets/Linkedin.svg"
import Github from "../../assets/github.svg"

function Navbar() {
    return (
    <>
      <div className='navbar'>
        <ul className='nav'>
          <a href="#resumo"><li>Inicio</li> </a>
          <a href="#sobre"><li>Sobre</li> </a>
          <a href="#projetos"><li>Projetos</li> </a>
          <li>
            <ul className='linkContato'>
              <li>
                <a href="https://www.linkedin.com/in/ali-dionisio/" target='blank'>
                  <img src={Linkedin} width={"20px"} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Ali-Dionisio/PORTIFOLIO" target='blank'>
                  <img src={Github} width={"20px"} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div> 
    </>
  )
}

export default Navbar
