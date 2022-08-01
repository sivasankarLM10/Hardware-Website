import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import { Design, Develope} from './AllSvgs';
import astronaut from '../assets/Images/download.jfif'
import img from "../assets/Images/life.jpg"
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
background-image: url(${img});
background-size: 110% 100%;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
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
    top: 100%
    bottom: 100%;
    left: 40%;
    transform: translate(-50%,80%);
    width: 100%;
    height: 100;
}
`
const image2 = styled.div`
width: 100%;
position: relative;
display: flex;
animation: ${float} 5s ease infinite;
img{
    position: absolute;
    top: 100%
    bottom: 100%;
    left: 40%;
    transform: translate(-50%,100%);
    width: 100%;
    height: 100;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 55vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;


font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color:white;
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:black;
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Develope width={30} height={20} /> HARDWARE CTF
</Title>
<Description>
Hardware CTF at InCTF is an opportunity to boost the understanding and recognition of hardware security and to add another dimension to traditional CTFs.
</Description>
<Description>
The CTF is based to demonstrate different hardware security concepts and to create a skilled community around hardware, that sparks new conversations and push to make that quantum leap.
</Description>
<Description>
The Hardware CTF presents challenges on Automotive security, ICS/SCADA, wireless security and firmware analysis with a moment to get accustomed to the new tools to get ahead in cyberspace.
</Description>

            </Main>

            <BigTitle text="HW CTF" top="80%" right="30%" />
        </Box>

        </ThemeProvider>
    )
}

export default MySkillsPage
