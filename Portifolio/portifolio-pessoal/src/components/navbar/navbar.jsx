import './navbar.css'

function Navbar() {
    return (
    <>
      <div className='navbar'>
        <ul className='nav'>
          <li>Inicio</li>
          <li>Sobre</li>
          <li>Projetos</li>
          <li>
            <ul className='linkContato'>
              <li>icone</li>
              <li>icone</li>
            </ul>
          </li>
        </ul>
      </div> 
    </>
  )
}

export default Navbar
