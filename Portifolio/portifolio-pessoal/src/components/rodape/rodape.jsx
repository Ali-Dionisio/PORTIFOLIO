import './rodape.css'
import Linkedin from "../../assets/Linkedin.svg"
import Github from "../../assets/github.svg"

function Rodape() {
    return (
    <>
      <div className='rodape'>
        <ul className='rod'>
          <li>
            Meu contato <br />
            (11) 99232-5271
          </li>
          <li>
            E-mail: <br />
            alisson.a-work@outlook.com
            </li>
          <li className='listContato'>
            <ul className='linkContato'>
              <li>
                <a href="https://www.linkedin.com/in/ali-dionisio/" target='blank'>
                  <img src={Linkedin} width={"30px"} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Ali-Dionisio/PORTIFOLIO" target='blank'>
                  <img src={Github} width={"30px"} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div> 
    </>
  )
}

export default Rodape
