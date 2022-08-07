import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ball } from '../components/AllSvgs'

const Container = styled.div`
position: relative;
`
const Slider = styled.div`
position: fixed;
top: 0;
right: 2rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transform: translateY(-100%);

.chain{
transform: rotate(135deg);

}

`

const PreDisplay = styled.div`
position: absolute;
top:0;
right: 2rem;
`


const ballComponent = (props) => {
    return (
        <Container>
        </Container>
    )
}

export default ballComponent
