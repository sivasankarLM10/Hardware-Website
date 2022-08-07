import React, { useEffect, useRef, useState } from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import {DarkTheme} from './Themes';
import {motion} from 'framer-motion';
import { NavLink } from 'react-router-dom'
import ParticleComponent2 from '../subComponents/ParticleComponent2';
import PowerButton from '../subComponents/PowerButton';
import { Work } from "../data/WorkData";
import Card from '../subComponents/Card';
import { YinYang } from './AllSvgs';
import BigTitlte from '../subComponents/BigTitlte';

const Box = styled.div`
background-color: ${props => props.theme.body};

height:300vh;
position: relative;
display: flex;
align-items: center;
`
const WORK = styled(NavLink)`
color: white;
position: fixed;
bottom:2rem;
left:2 rem;
text-decoration: none;
z-index:1;
`
const WORK2 = styled(NavLink)`
color: white;
position: fixed;
bottom:1rem;
left:1 rem;
text-decoration: none;
z-index:1;
`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;

color:white;
`
const Rotate = styled.span`
position: fixed;
top:1rem;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:2;
`


// Framer-motion Configuration
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const WorkPage = () => {

    const ref = useRef(null);
    const yinyang = useRef(null);



    useEffect(() => {
        let element = ref.current;
       
        
        const rotate = () => {
         
         element.style.transform = `translateX(${-window.pageYOffset}px)`
      
         
          return (yinyang.current.style.transform =
            'rotate(' + -window.pageYOffset + 'deg)')
        }
    
        window.addEventListener('scroll', rotate)
        return () => {
          window.removeEventListener('scroll', rotate);
          
        }
      }, [])
      const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <ThemeProvider theme={DarkTheme}>
          <WORK to="/work2" click={+click}>
                <motion.h2
                initial={{
                    y:-0,
                    x:10,
                    backgroundColor:'green',
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 1.9}}
                >
                    ALUMNI
                </motion.h2>
            </WORK>
            <WORK2 to="/work3" click={+click}>
                <motion.h2
                initial={{
                    y:-15,
                    x:300,
                    backgroundColor:'green',
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 1.9}}
                >
                    PRESENT
                </motion.h2>
            </WORK2>
<Box>
<ParticleComponent2 theme='dark' />
<PowerButton />

     <Main ref={ref}   variants={container} initial='hidden' animate='show' >
      
         {
            Work.map( d => 
            <Card key={d.id} data={d} />
            )
            }
     </Main>
<Rotate ref={yinyang}>
    <YinYang width={80} height={80} fill='green' />
</Rotate>

<BigTitlte text="Co-Founders" top='10%' right="0%" />
        </Box>

        </ThemeProvider>
        
    )
}

export default WorkPage
