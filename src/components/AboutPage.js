import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/nullcon.jpg'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:110vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
width: 100%;
position: relative;
display: flex;
animation: ${float} 5s ease infinite;
img{
    position: absolute;
    top: 1%
    bottom: 10%;
    left: 75%;
    transform: translate(-50%,50%);
    width: 40%;
    height: 40vh;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 38vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  &:hover{
    color:${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 1s ease;
`


const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        We’re a small team of enthusiasts working on securing devices from attacks that come from the physical device rather than the software the system runs. We research about security that starts right from the circuit board to making tools and devices to make trusted, dependable and secure hardware.
We at bi0s, work on improving and creating new techniques to design, tweak, manipulate and exploit hardware to make devices safe, from the beginning.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
