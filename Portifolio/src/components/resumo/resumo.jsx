import './resumo.css'
import React, {useEffect, useState} from 'react'

function Resumo() {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);

    setTimeout(() => {
      document.title = counter + ' Alisson Almeida';
    }, 5000);

  useEffect(() => {
    document.title = counter;

  }, [counter]);
  return visible && (
    <>
      <div className='boxTitulo'>
        <h2 className='titulo' id='resumo'>Resumo - {counter} </h2>
      <div>
        <h3 className='texto'>
            Profissional pró-ativo, com sede por conhecimento. Busca se desenvolver profissionalmente com tecnologias atuais, que estão em alta no mercado. <br />
            Criativo, Com o objetivo de criar site e funcionalidades que ajudem o usuário final. <br />
            Busco uma realocação de carreira, atualmente atuo com acompanhamento de processos, analise e resolução de problemas, ETL, BI, SQL, orientação aos juniors, contato com o usuário de todos os niveis hierárquicos e sempre aberto para se desenvolver.
        </h3>
        <div className='saibaMais'>
            <button onClick={() => setCounter(counter + 1)} className='btnSaibaMais'>Clique aqui</button>
        </div>
      </div>
      </div> 
    </>
  )
}

export default Resumo
