import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import BasicModal from './Modal';



const SpecialEvent = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div onClick={()=>setShowModal(!showModal)}>
    <Special
    src={"https://file.rendit.io/n/ynyikOrshspCdkOXFkQ1.png"}
  />
  {showModal && <BasicModal heading={"NOT ENOUGH POINTS :("} paragraph={"You need 20 more points to access this EXCLUSIVE event. Go get more points!"}></BasicModal>}
  </div>
  )
}
const Special = styled.img`
  width: 1186px;
  height: 152px;
  position: absolute;
  top: 34px;
  left: 46px;
`;
export default SpecialEvent