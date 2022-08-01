import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import bvideo from "E:/react Bi0s project/Hardware Website/src/assets/audio/final.mp4"
import Intro from './Intro'

const MainContainer = styled(motion.div)`
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;
h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`
const style = {
 
    // Adding media query..
    '@media (max-width: 500px)': {
      display: 'none',
    },
  };
  
const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled(NavLink)`
color: white;
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: white;

color: white;
position: absolute;
top: 2rem;
right: calc(10rem + 3vw);
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: white;
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
weight: 100;
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {        
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <MainContainer>
         <DarkDiv   click={click}/>
         <video autoPlay loop muted
            style={{
                width: "100%",
                left: "100%",
                top: "100%",
                height: "100%",
                objectFit:"cover",
                transform: "translate(0%,0%)",
                zIndex: "-1"
            }}
            >
                <source src={bvideo} type="video/mp4"/>
         </video>
            <Container>
            <LogoComponent theme={click ? 'dark' :'light'}/>
            <SocialIcons theme={click ? 'dark' :'light'} />
            <Center click={click}>
                <YinYang  onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                <span></span>
            </Center>
            <Contact target="_blank" to={{pathname:"mailto:codebucks27@gmail.com"}}>
            </Contact>
            <BLOG to="/blog">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1.5}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1.9}}
                >
                    FIELDS
                </motion.h2>
            </BLOG>
            <WORK to="/work" click={+click}>
                <motion.h2
                initial={{
                    y:-500,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:5,
                    x:150,
                    transition: { type:'spring', duration: 1.5, delay:1.5}
                }}
                 whileHover={{scale: 2.1}}
                whileTap={{scale: 2.9}}
                >
                    MEMBERS
                </motion.h2>
            </WORK>
            <BottomBar>
            <ABOUT to="/about" click={+click}>
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1.5}
                }}
                 whileHover={{scale: 2.1}}
                whileTap={{scale: 2.9}}
                >
                    HOME
                </motion.h2>
            </ABOUT>
            <SKILLS to="/skills">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1.5}
                }}
                 whileHover={{scale: 2.1}}
                whileTap={{scale: 2.9}}
                >
                    HW CTF
                </motion.h2>
            </SKILLS>

            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
            }
export default Main
