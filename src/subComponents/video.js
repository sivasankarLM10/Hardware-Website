import React from "react";
import styled from 'styled-components'
import videos from "E:/react Bi0s project/Hardware Website/src/assets/audio/introvid.mp4"

const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`
const video = (props) => {
  return (
      <Box>
          <video loop autoPlay>
        <source
          src={videos}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </Box>
  )
}

export default video