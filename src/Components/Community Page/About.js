import React from "react";
import styled from "styled-components";
import Chooser from "./choose";
import { useParams } from "react-router-dom";
export const About = ({}) => {
  // let { id } = useParams();

  const db = {"Weddings%20in%20Tel%20Aviv":{
    "description": "A place to share and discuss any kind of wedding outfit."
    },
    "Streetwear":{
      "description": "Casual, comfortable pieces such as jeans, T-shirts, baseball caps, and sneakers"
      },
    "Your%20Favorites%20Brands":{
      "description": "We notice that you like Gucci and Prada, they like them too"
    },
    "Skateboarding":{
      "description": "It's fit for your streetwear look"
    },
    "Color%20Matching":{
      "description": "Sometimes it's hard to know what fits what, let them hekp you."
    },
    "Poolwear":{
      "description": "We are all getting a little wet sometimes"
    },
    "Cocktail%20Evening":{
      "description": "It's hard to choose outfit for this classic events"
      },
    "Party%20Look":{
      "description": "The group to discuss the clother about your wiled parties"
    },
    "90's party":{
      "description": "Lets go a while back to the most colourful party"
    },    
  };  
  // const arr = window.location.pathname.split('/');
  // const id = arr[arr.length - 1];
  // console.log(db[id].description);
  return (
    <AboutRoot>
      <Element1>
        <BAR>
          <Israel src={"https://file.rendit.io/n/d9TYpPtkuy9KATJkvqFD.svg"} />
          <Text1>HE</Text1>
          <Text2 width={"106px"}>WOMEN</Text2>
          <Text2 width={"59px"}>MEN</Text2>
          <Text2 width={"65px"}>KIDS</Text2>
          <WhiteRectangle />
          <WhiteFlexRow>
            <Image1 src={"https://file.rendit.io/n/ipZvYgh9GTR1dDVcSVle.svg"} />
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
          src={"https://file.rendit.io/n/ZSkA8wnIo4shH1oCCzGU.svg"}
          left={"136px"}
        />
        <Image2
          src={"https://file.rendit.io/n/XMNdVlSoodCtGYCjYrms.svg"}
          left={"68px"}
        />
        <Image2
          src={"https://file.rendit.io/n/PCVwCShv3kgmaJV9xo1A.svg"}
          left={"0px"}
        />
        <Line src={"https://file.rendit.io/n/NkyAnforJwFGva1fgl0u.svg"} />
      </Element2>
      <FlexRow>
        <FlexColumn>
          {/* <Text6>{id.replaceAll("%20"," ")}</Text6> */}
          <Text6>{"Weddings in Tel Aviv"}</Text6>

          <Element3>
            <Ellipse>
              <Ellipse1>
                <Bithreedots
                  src={"https://file.rendit.io/n/PIwcQAXue6sbJJ0VlO31.svg"}
                />
              </Ellipse1>
            </Ellipse>
            <Ellipse2
              src={"https://file.rendit.io/n/f8WIrW7qeSclMio9klu9.png"}
            />
            <Ellipse3
              src={"https://file.rendit.io/n/AK1EGllP9UEbeI4vI41O.png"}
            />
            <Ellipse4
              src={"https://file.rendit.io/n/bAcxj26VWPz2TKFZ7vpA.png"}
            />
            <Ellipse5
              src={"https://file.rendit.io/n/rO4sN8bOtNqtgtZGVpXk.png"}
            />
            <Ellipse6
              src={"https://file.rendit.io/n/rOt9F3mNDYUPmmNA9iXZ.png"}
            />
            <Text7>33 Members</Text7>
            <Ellipse7
              src={"https://file.rendit.io/n/S6o5IpRxsBqlUEDFEJ4d.png"}
            />
          </Element3>
        </FlexColumn>
        <Element4>
          <BlueFlexRow>
            <Image3 src={"https://file.rendit.io/n/K18skC6qNILgS5CapEnZ.svg"} />
          </BlueFlexRow>
          <Text8>Join Community</Text8>
        </Element4>
        <Element5>
          <ScreaminGreenFlexRow>
            <Image3 src={"https://file.rendit.io/n/FqjKft34bp8iBNoefj4T.svg"} />
          </ScreaminGreenFlexRow>
          <Text9>Invite</Text9>
        </Element5>
      </FlexRow>
      <Line1 src={"https://file.rendit.io/n/8EPwYWAlKw6kzaD1fsfB.svg"} />
      <FlexRow1>
        {[
          {
            childText: "About",
            width: "106px",
          },
          {
            childText: "Discussion",
            width: "178px",
          },
          {
            childText: "Chat",
            width: "124px",
          },
        ].map((data) => {
          const width = data.width
          const text = data.childText
          console.log(data)
         return <Chooser width={width} text={text}></Chooser>
        })}
      </FlexRow1>
      <Line3 src={"https://file.rendit.io/n/m5DL2QVZkS18voMej1YT.svg"} />
      <Line2 src={"https://file.rendit.io/n/8EPwYWAlKw6kzaD1fsfB.svg"} />
      <Element6>
        <Text13>Description</Text13>
        {/* <Text13>{db[id].description}</Text13> */}
        <Element7 />
      </Element6>
    </AboutRoot>
  );
};
const AboutRoot = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  height: 1948px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  min-width: 1438px;
  align-items: flex-start;
`;
const Element1 = styled.div`
  align-self: stretch;
  height: 71px;
  position: relative;
  min-width: 1438px;
  margin: 0px 0px 31px 0px;
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
const WhiteRectangle = styled.div`
  width: 281px;
  height: 64px;
  background-color: #ffffff;
  margin: 0px 414px 0px 0px;
`;
const WhiteFlexRow = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  width: 157px;
  height: 21.9px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 16.1px 13px 10px 13px;
  margin: 5px 0px 0px 0px;
`;
const Image1 = styled.img`
  width: 19px;
  height: 17.9px;
`;
const Text5 = styled.div`
  width: 234px;
  height: 54px;
  font-size: 25px;
  font-family: SF Pro Display;
  font-weight: 600;
  position: absolute;
  top: 17px;
  left: 561px;
`;
const Element2 = styled.div`
  width: 1119px;
  height: 93.5px;
  position: relative;
  margin: 0px 0px 37.5px 144px;
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
  padding: 0px 175px 0px 149px;
  margin: 0px 0px 46px 0px;
`;
const FlexColumn = styled.div`
  width: 459px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-start;
  margin: 0px 335px 0px 0px;
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
  height: 57px;
  position: relative;
  min-width: 459px;
`;
const Ellipse = styled.div`
  background-image: url("https://file.rendit.io/n/jMWaFhFfZBLwLuv0PaKB.png");
  background-size: cover;
  position: absolute;
  left: 402px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Ellipse1 = styled.div`
  height: 57px;
  background-image: url("https://file.rendit.io/n/HUUt9EIvMA5i1sTdneSi.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 15px 0px 20px;
`;
const Bithreedots = styled.img`
  width: 22px;
  height: 22px;
`;
const Ellipse2 = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 365px;
`;
const Ellipse3 = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 336px;
`;
const Ellipse4 = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 301px;
`;
const Ellipse5 = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 270px;
`;
const Ellipse6 = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 241px;
`;
const Text7 = styled.div`
  width: 228px;
  height: 46px;
  font-size: 35px;
  font-family: SF Pro Display;
  font-weight: 300;
  position: absolute;
  top: 5px;
  left: 7px;
`;
const Ellipse7 = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 206px;
`;
const Element4 = styled.div`
  width: 202px;
  height: 108px;
  position: relative;
  flex-grow: 1;
  margin: 0px 28px 0px 0px;
`;
const BlueFlexRow = styled.div`
  width: 186px;
  background-color: #256bf2;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  padding: 12px 8px 10px 8px;
`;
const Text8 = styled.div`
  width: 162px;
  height: 46px;
  font-size: 20px;
  font-family: SF Pro Display;
  font-weight: 600;
  color: #ffffff;
  position: absolute;
  top: 10px;
  left: 38px;
`;
const Element5 = styled.div`
  width: 90px;
  height: 108px;
  position: relative;
  flex-grow: 1;
`;
const ScreaminGreenFlexRow = styled.div`
  width: 78px;
  background-color: #1d9f07;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  padding: 11px 6px;
`;
const Text9 = styled.div`
  width: 59px;
  height: 46px;
  font-size: 20px;
  font-family: SF Pro Display;
  font-weight: 600;
  color: #ffffff;
  position: absolute;
  top: 11px;
  left: 30px;
`;
const Line1 = styled.img`
  width: 1116px;
  height: 1px;
  margin: 0px 0px 21px 144.5px;
`;
const FlexRow1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 62px;
  align-items: center;
  margin: 0px 0px 8px 0px;
`;
const Line3 = styled.img`
  width: 119px;
  height: 5px;
  margin: 0px 0px 1px 447.5px;
`;
const Line2 = styled.img`
  width: 1116px;
  height: 1px;
  margin: 0px 0px 54px 140.5px;
`;
const Element6 = styled.div`
  align-self: stretch;
  height: 640px;
  position: relative;
  width: 100%;
  min-width: 1438px;
`;
const Text13 = styled.div`
  width: 100%;
  height: 46px;
  font-size: 35px;
  font-family: SF Pro Display;
  font-weight: 300;
  position: absolute;
  top: 39px;
  left: 192px;
`;
const Element7 = styled.div`
  border-width: 1px;
  border-color: #b4acac;
  border-style: solid;
  width: 1096px;
  height: 636px;
  position: absolute;
  left: 148px;
  border-radius: 10px;
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
const Image3 = styled.img`
  width: 24px;
  height: 24px;
`;
const Text10 = styled.div`
  height: 46px;
  font-size: 35px;
  font-family: SF Pro Display;
  font-weight: 500;
  width: ${(props) => props.width};
`;
