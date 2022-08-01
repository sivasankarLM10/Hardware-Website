import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';
import Me from '../assets/Images/Passport.jpg'
import Me2 from '../assets/Images/nullcon.jpg'

const Box = styled(motion.li)`
width: 30vh;
height: 50vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
background-color:red;
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};

}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const role = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const batch = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`

const Footer = styled.footer`
display: flex;
justify-content: right;
`
const SubBox = styled.div`
width: 100%;
position: relative;
display: flex;

.pic{
    position: relative;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Link = styled(NavLink)`
background-color: white;
color: black;
text-decoration: none;
padding:1rem calc(1.9rem + 4.3vw);
border-radius: 5px 80px 50px 300px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: black};
    color: white;

}
`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.text};
    }
}

`
const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width:100%;
height: 60%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;
`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, imgSrc, name, role,batch, demo, github} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Image img={imgSrc} />
            <Title>{name}</Title>
            <role>
                {role}
            </role>
            <batch>
                {batch}
            </batch>
            <Footer>
                <Link to={{pathname: `${demo}`}} target="_blank">
                    Visit
                </Link>
            </Footer>
        </Box>
    )
}

export default Card
