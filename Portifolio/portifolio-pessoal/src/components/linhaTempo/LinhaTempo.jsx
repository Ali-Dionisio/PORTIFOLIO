import './LinhaTempo.css'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

function LinhaTempo() {
    return (
    <>
    <div className='sobremim'>
      <div className='textosSobreMim'>
        <h2 className='titleSobreMim'>Sobre mim</h2>
      </div>
    </div>
    <div className='caixaLinhaTempo'>
    <div className='linhaTempo'>
         <Timeline
          sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 5,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <h3 className='anoSobre'>2019</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p className='textoSobre'>
            Formação em Analise e Desenvolvimento de Sistemas 
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <h3 className='anoSobre'>2020</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p className='textoSobre'>
            Pós-graduação em Redes
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <h3 className='anoSobre'>2023</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p className='textoSobre'>
            Técnico em Desenvolvimento de Sistemas
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <h3 className='anoSobre'>2025</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <p className='textoSobre'>
            Cursando Engenharia de Software
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    
    </div>
    </div>
    </>
  )
}

export default LinhaTempo
