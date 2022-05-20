import { Link } from '@mui/material';
import React from 'react'
import styled from "styled-components";


const Chooser = ({width,text}) => {
  const link = text.toLowerCase()
  return (
    <Link to={`/${link}/sdzdsc`}>
     <div onClick={()=>console.log("CLICKED",  `/${link}`)}>
        <Text10 width={width}>{text}</Text10>
        {/* {text} */}
      </div>
      </Link>  
  )
}
const Text10 = styled.div`
  height: 46px;
  font-size: 35px;
  font-family: SF Pro Display;
  font-weight: 500;
  width: ${(props) => props.width};
`;
export default Chooser