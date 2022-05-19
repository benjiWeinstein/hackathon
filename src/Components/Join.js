import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
export const JoinCommunity = () => {
  const {id} = useParams()
  return (
    <JoinCommunityRoot>
      <Element1>
        <BAR>
          <Israel src={"https://file.rendit.io/n/1Hi4b2SUZlHuc3PSDhkL.svg"} />
          <Text1>HE</Text1>
          <Text2 width={"106px"}>WOMEN</Text2>
          <Text2 width={"59px"}>MEN</Text2>
          <Text4>KIDS</Text4>
          <WhiteRectangle />
          <WhiteFlexRow>
            <Image1 src={"https://file.rendit.io/n/8Xxvm5QWuX3sH3YvsTJD.svg"} />
          </WhiteFlexRow>
        </BAR>
        <Text5>OUR COMMUNITY</Text5>
      </Element1>
      <Element2>
        <FACTORY2>
          F A C T O R Y<FACTORY fontWeight={"400"}> </FACTORY>
          <FACTORY fontWeight={"600"}>5 4</FACTORY>
        </FACTORY2>
        <Image2
          src={"https://file.rendit.io/n/qXYc0evyUqv538mX26ea.svg"}
          left={"136px"}
        />
        <Image2
          src={"https://file.rendit.io/n/MA9F6e5PzbNeF5Z7Xsm8.svg"}
          left={"68px"}
        />
        <Image2
          src={"https://file.rendit.io/n/qB35apIaAVlaeGl9A7l9.svg"}
          left={"0px"}
        />
        <Line src={"https://file.rendit.io/n/EdzYq0aplOKBkBH1O2Uz.svg"} />
      </Element2>
      <FlexRow>
        <Text6>{`${id}`}</Text6>
        <Element3>
          <BlueRectangle />
          <Text7>Join Community</Text7>
        </Element3>
      </FlexRow>
      <FlexRow1>
        <Ellipse2 src={"https://file.rendit.io/n/kebCCccwja1DBf60XCIh.png"} />
        <FlexColumn>
          <TimberwolfFlexRow>
            <Text8>What’s on your mind, NAME?</Text8>
          </TimberwolfFlexRow>
          <Element4>
            <WhiteFlexRow1>
              <Image3
                src={"https://file.rendit.io/n/3Vh8CxV8hahLLtpairon.svg"}
              />
            </WhiteFlexRow1>
            <Text9>Add Photo</Text9>
          </Element4>
        </FlexColumn>
      </FlexRow1>
      <Element5>
        <Image4 src={"https://file.rendit.io/n/joNCnGHjG2pRfYJ36vpQ.svg"} />
        <NameName>Name Name </NameName>
        <Text10>Post Description\Discuss?</Text10>
        <Text11>24 Comments</Text11>
        <FlexColumn1>
          <Ellipse src={"https://file.rendit.io/n/56EbnI9D3l0LFvSNGUz6.png"} />
          <Image5 src={"https://file.rendit.io/n/ZQFsQLPJHVp8lfezvcuQ.png"} />
          <Element6 />
        </FlexColumn1>
      </Element5>
      <Element7>
        <Element8>
          <Image4 src={""} />
          <NameName>Name Name </NameName>
          <Text10>Post Description\Discuss?</Text10>
          <Text11>24 Comments</Text11>
          <FlexRow2>
            <Ellipse2
              src={"https://file.rendit.io/n/56EbnI9D3l0LFvSNGUz6.png"}
            />
          </FlexRow2>
          <Element9 />
          <Image7 src={"https://file.rendit.io/n/uRX95TtAchprceBDPvIX.png"} />
        </Element8>
        <Image8 src={"https://file.rendit.io/n/8dy5ZlLSyJrt2id8i0rJ.svg"} />
      </Element7>
      <br></br>
      <br></br>
    </JoinCommunityRoot>
  );
};
const JoinCommunityRoot = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  height: 2081px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-width: 1438px;
  align-items: flex-start;
`;
const Element1 = styled.div`
  align-self: stretch;
  height: 66.6px;
  position: relative;
  min-width: 1438px;
  margin: 0px 0px 35.4px 0px;
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
const Image1 = styled.img`
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
const Element2 = styled.div`
  width: 1119px;
  height: 93.5px;
  position: relative;
  margin: 0px 0px 36.5px 144px;
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
const FlexRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 116px;
  align-items: flex-start;
  padding: 0px 175px;
  margin: 0px 0px 19px 0px;
`;
const Text6 = styled.div`
  width: 428px;
  height: 46px;
  font-size: 40px;
  font-family: SF Pro Display;
  font-weight: 600;
`;
const Element3 = styled.div`
  align-self: stretch;
  width: 185px;
  height: 57px;
  position: relative;
  flex-grow: 1;
`;
const BlueRectangle = styled.div`
  width: 185px;
  height: 46px;
  background-color: #256bf2;
  position: absolute;
  top: 1px;
  border-radius: 15px;
`;
const Text7 = styled.div`
  width: 162px;
  height: 46px;
  font-size: 20px;
  font-family: SF Pro Display;
  font-weight: 600;
  color: #ffffff;
  position: absolute;
  top: 11px;
  left: 21px;
`;
const FlexRow1 = styled.div`
  border-width: 1px;
  border-color: #b4acac;
  border-style: solid;
  width: 1015px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 41px;
  align-items: flex-start;
  border-radius: 20px;
  padding: 61px 50px 40px 50px;
  margin: 0px 0px 50px 136px;
`;
const FlexColumn = styled.div`
  align-self: stretch;
  width: 841px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-start;
`;
const TimberwolfFlexRow = styled.div`
  width: 726px;
  background-color: #d9d9d9;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  padding: 25px 57px 9px 57px;
`;
const Text8 = styled.div`
  width: 545px;
  height: 67px;
  font-size: 40px;
  font-family: SF Pro Display;
  font-weight: 500;
`;
const Element4 = styled.div`
  width: 357px;
  height: 84px;
  position: relative;
`;
const WhiteFlexRow1 = styled.div`
  width: 269px;
  background-color: #f5f5f5;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  padding: 11px 12px 12px 12px;
`;
const Image3 = styled.img`
  width: 61px;
  height: 61px;
`;
const Text9 = styled.div`
  width: 267px;
  height: 67px;
  font-size: 40px;
  font-family: SF Pro Display;
  font-weight: 400;
  position: absolute;
  top: 17px;
  left: 90px;
`;
const Element5 = styled.div`
  width: 1117px;
  height: 1077px;
  position: relative;
  margin: 0px 0px 51px 149px;
`;
const FlexColumn1 = styled.div`
  border-width: 1px;
  border-color: #b4acac;
  border-style: solid;
  width: 777px;
  height: 1039px;
  display: flex;
  position: absolute;
  top: -1px;
  left: -1px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 20px;
  padding: 18px 286px 18px 52px;
`;
const Ellipse = styled.img`
  width: 101px;
  height: 101px;
  align-self: flex-start;
  margin: 0px 0px 76px 0px;
`;
const Image5 = styled.img`
  width: 543px;
  height: 728px;
  margin: 0px 0px 34px 0px;
`;
const Element6 = styled.div`
  border-width: 1px;
  border-color: #b4acac;
  border-style: solid;
  width: 267px;
  height: 57px;
  border-radius: 10px;
  margin: 0px 136px 0px 0px;
`;
const Element7 = styled.div`
  align-self: stretch;
  height: 283px;
  position: relative;
  min-width: 1438px;
`;
const Element8 = styled.div`
  width: 1117px;
  height: 230px;
  position: absolute;
  top: 53px;
  left: 137px;
`;
const FlexRow2 = styled.div`
  border-width: 1px;
  border-color: #b4acac;
  border-style: solid;
  width: 1015px;
  height: 105px;
  display: flex;
  position: absolute;
  top: 1px;
  left: 1px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  padding: 55px 50px 69px 50px;
`;
const Element9 = styled.div`
  border-width: 1px;
  border-color: #b4acac;
  border-style: solid;
  width: 267px;
  height: 57px;
  position: absolute;
  top: 997px;
  left: 423px;
  border-radius: 10px;
`;
const Image7 = styled.img`
  width: 543px;
  height: 728px;
  position: absolute;
  top: 235px;
  left: 287px;
`;
const Image8 = styled.img`
  width: 216px;
  height: 216px;
  position: absolute;
  left: 1171px;
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
const Image2 = styled.img`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 15px;
  left: ${(props) => props.left};
`;
const Ellipse2 = styled.img`
  width: 101px;
  height: 101px;
`;
const Image4 = styled.img`
  width: 53px;
  height: 53px;
  position: absolute;
  top: 1000px;
  left: 449px;
`;
const NameName = styled.div`
  width: 428px;
  height: 46px;
  font-size: 40px;
  font-family: SF Pro Display;
  font-weight: 600;
  position: absolute;
  top: 85px;
  left: 178px;
  white-space: pre-wrap;
`;
const Text10 = styled.div`
  width: 567px;
  height: 46px;
  font-size: 40px;
  font-family: SF Pro Display;
  font-weight: 400;
  position: absolute;
  top: 154px;
  left: 193px;
`;
const Text11 = styled.div`
  width: 150px;
  height: 30px;
  font-size: 25px;
  font-family: SF Pro Display;
  font-weight: 400;
  color: #aaaaaa;
  position: absolute;
  top: 1013px;
  left: 509px;
`;
