import React from 'react'
import styled from "styled-components";
import { useHistory } from 'react-router-dom';



const Chooser = ({width,text,id}) => {
  const link = text.toLowerCase()
  console.log(`/${link}`)
  let history = useHistory();
  return (
    <div onClick={()=>{history.push(`/${link}/`);}}>
        <Text10 width={width}>{text}</Text10>
    </div>
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