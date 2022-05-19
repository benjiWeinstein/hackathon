import React from "react";
import styled from "styled-components";
import Communities from "./Communities";
export const Factory1 = () => {
  return (
    <FactoryRoot>
      <Element10>
        <BAR>
          <Israel src={"https://file.rendit.io/n/VIyHdlgx05P5bDH2QWvG.svg"} />
          <Text1>HE</Text1>
          <Text2 width={"106px"}>WOMEN</Text2>
          <Text2 width={"59px"}>MEN</Text2>
          <Text4>KIDS</Text4>
          <WhiteRectangle />
          <WhiteFlexRow>
            <Image37
              src={"https://file.rendit.io/n/3IxTWMKtp0l6kwfhhZj2.svg"}
            />
          </WhiteFlexRow>
        </BAR>
        <Text5>OUR COMMUNITY</Text5>
      </Element10>
      <Element11>
        <FACTORY2>
          F A C T O R Y<FACTORY fontWeight={"400"}> </FACTORY>
          <FACTORY fontWeight={"600"}>5 4</FACTORY>
        </FACTORY2>
        <Image38
          src={"https://file.rendit.io/n/v580PeAObm36d7gIfevV.svg"}
          left={"136px"}
        />
        <Image38
          src={"https://file.rendit.io/n/9M251USQXNC3ELcFHz1T.svg"}
          left={"68px"}
        />
        <Image38
          src={"https://file.rendit.io/n/EpYr9JwgfLYgqN0i1W4x.svg"}
          left={"0px"}
        />
        <Line src={"https://file.rendit.io/n/6lZpj1AVCfwNDFIcKrv6.svg"} />
      </Element11>
      <Element12>
        <Text6>Special Events</Text6>
        <SpecialEvent
          src={"https://file.rendit.io/n/fgpzA2z5krxHwGedc3Ru.png"}
        />
      </Element12>

      <Text7>Communities You May Like</Text7>
    { Array(3).fill().map(() => { 
      return <Communities
        title1={"Wedding Day"}
        title2={"School"}
        title3={"University"}
        descrip1={"description"}
        descrip2={"description"}
        descrip3={"description"}
      ></Communities>}) }

    </FactoryRoot>
  );
};

const FactoryRoot = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  height: 2081px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  min-width: 1438px;
`;
const Element10 = styled.div`
  height: 66.6px;
  position: relative;
  min-width: 1438px;
  margin: 0px 0px 4.4px 0px;
`;
const BAR = styled.div`
  width: 1375px;
  background-color: #5f6566;
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  padding: 0px 29px 0px 34px;
`;
const Israel = styled.img`
  width: 37px;
  height: 37px;
  margin: 0px 9px 0px 0px;
`;
const Text1 = styled.div`
  width: 49px;
  height: 31px;
  font-size: 25px;
  font-family: SF Pro Display;
  font-weight: 500;
  color: #ffffff;
  margin: 0px 63px 0px 0px;
`;
const Text4 = styled.div`
  width: 65px;
  height: 51px;
  font-size: 25px;
  font-family: Noto Sans Hebrew;
  font-weight: 400;
  color: #ffffff;
  align-self: flex-end;
  margin: 0px 136px 0px 0px;
`;
const WhiteRectangle = styled.div`
  width: 308px;
  height: 64px;
  background-color: #ffffff;
  margin: 0px 286px 0px 0px;
`;
const WhiteFlexRow = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  width: 161px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 14px 11px 13px 11px;
  margin: 5px 0px 0px 0px;
`;
const Image37 = styled.img`
  width: 19px;
  height: 17px;
`;
const Text5 = styled.div`
  width: 352px;
  height: 53.6px;
  font-size: 25px;
  font-family: Noto Sans Hebrew;
  font-weight: 700;
  position: absolute;
  top: 13px;
  left: 673px;
`;

const Element11 = styled.div`
  width: 1119px;
  height: 93.5px;
  align-self: flex-start;
  position: relative;
  margin: 0px 0px 38.5px 144px;
`;
const FACTORY2 = styled.div`
  text-align: center;
  height: 76px;
  font-size: 40px;
  font-family: Noto Sans Hebrew;
  font-weight: 100;
  position: absolute;
  left: 398px;
`;
const Line = styled.img`
  width: 1119px;
  height: 1px;
  position: absolute;
  top: 93px;
  left: 0.5px;
`;
const Element12 = styled.div`
  height: 186px;
  position: relative;
  min-width: 1438px;
  margin: 0px 0px 22px 0px;
`;
const Text6 = styled.div`
  width: 233px;
  height: 46px;
  font-size: 30px;
  font-family: SF Pro Display;
  font-weight: 600;
  position: absolute;
  left: 78px;
`;
const SpecialEvent = styled.img`
  width: 1186px;
  height: 152px;
  position: absolute;
  top: 34px;
  left: 46px;
`;
const Text7 = styled.div`
  width: 417px;
  height: 46px;
  font-size: 30px;
  font-family: SF Pro Display;
  font-weight: 600;
  align-self: flex-start;
  margin: 0px 0px 22px 78px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 74px;
  margin: 0px 0px 80px 0px;
`;
const Element13 = styled.div`
  width: 386px;
  height: 406px;
  align-self: center;
  position: relative;
  margin: 0px 68px 0px 0px;
`;
const Text2 = styled.div`
  height: 51px;
  font-size: 25px;
  font-family: Noto Sans Hebrew;
  font-weight: 400;
  color: #ffffff;
  align-self: flex-end;
  margin: 0px 35px 0px 0px;
  width: ${(props) => props.width};
`;
const FACTORY = styled.div`
  font-size: 40px;
  font-family: Noto Sans Hebrew;
  display: contents;
  white-space: pre-wrap;
  font-weight: ${(props) => props.fontWeight};
`;
const Image38 = styled.img`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 15px;
  left: ${(props) => props.left};
`;
const TimberwolfFlexColumn = styled.div`
  height: 366px;
  background-color: #d9d9d9;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
  gap: 79px;
  align-items: center;
  border-radius: 20px;
  padding: 20px 26px 20px 17px;
`;
const Biimagefill1 = styled.img`
  width: 123px;
  height: 123px;
`;
const Element14 = styled.div`
  height: 124px;
  position: relative;
  min-width: 343px;
`;
const Text8 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: SF Pro Display;
  font-weight: 700;
  position: absolute;
`;
const Text9 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: SF Pro Display;
  font-weight: 400;
  position: absolute;
  top: 32px;
  left: 6px;
`;
const Element15 = styled.div`
  width: 337px;
  height: 124px;
  position: absolute;
  left: 6px;
`;
const Text10 = styled.div`
  width: 22.8px;
  height: 22.8px;
  display: flex;
  font-size: 10px;
  font-family: SF Pro Display;
  font-weight: 400;
  color: #3c3c3c;
  position: absolute;
  top: 91.7px;
  left: 106px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const FlexRow1 = styled.div`
  width: 337px;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const Element16 = styled.div`
  align-self: stretch;
  width: 101px;
  height: 124px;
  position: relative;
  flex-grow: 1;
`;
const Image5 = styled.img`
  width: 38px;
  height: 38px;
  position: absolute;
  top: 86px;
  left: ${(props) => props.left};
`;
const Image8 = styled.img`
  width: 38px;
  height: 38px;
`;
const Line2 = styled.img`
  width: 386px;
  height: 1px;
  position: absolute;
  top: 240px;
  left: 0.5px;
`;
const Element17 = styled.div`
  width: 387.5px;
  height: 406px;
  position: relative;
  flex-grow: 1;
  margin: ${(props) => props.margin};
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 66.5px;
  margin: ${(props) => props.margin};
`;
