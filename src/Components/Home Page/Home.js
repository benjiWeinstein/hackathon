import React from "react";
import styled from "styled-components";
import Com from "./Communities";
import SpecialEvent from "./SpecialEvent1";
export const FactoryNew = () => {
  return (
    <FactoryRoot>
      <Element10>
        <BAR>
          <Israel src={"https://file.rendit.io/n/ZEJu8tqm1kCJxtamBeei.svg"} />
          <Text1>HE</Text1>
          <Text2 width={"106px"}>WOMEN</Text2>
          <Text2 width={"59px"}>MEN</Text2>
          <Text2 width={"65px"}>KIDS</Text2>
          <WhiteRectangle />
          <WhiteFlexRow>
            <Image37
              src={"https://file.rendit.io/n/omuJf6bCkYfAiASPhWtv.svg"}
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
          src={"https://file.rendit.io/n/RavI7HGjDZGaKh4WghdF.svg"}
          left={"136px"}
        />
        <Image38
          src={"https://file.rendit.io/n/17l15lmCHKcvxGyOwal8.svg"}
          left={"68px"}
        />
        <Image38
          src={"https://file.rendit.io/n/0aNmNkYW2KpaucqvZjEd.svg"}
          left={"0px"}
        />
        <Line src={"https://file.rendit.io/n/Wb0OWD8TeAgpvfJtpLtt.svg"} />
      </Element11>
      <Element12>
        <Text6>142 Points</Text6>
        <Text7>Special Events</Text7>
        
        <SpecialEvent></SpecialEvent>
        
      </Element12>
      <FlexColumn>
        <Text8>Communities You May Like</Text8>
        <FlexRow>
            <Com title={`Weddings in Tel Aviv`} src={`https://file.rendit.io/n/750GMhe5n11oN822x2zb.png`} descrip={`Beuatiful, but never in white.`}></Com>
            <Com title={`Streetwear`} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEH7T13VYfoLZz-0PdlHB-9JFXLypnHLfuA&usqp=CAU`} descrip={`Can you catch up with the city?`}></Com>
            <Com title={`Your Favorites Brands`} src={`https://cf.ltkcdn.net/fashion-history/images/orig/196838-480x344-Fashion_Brands.jpg`} descrip={`A group for you and like mined people`}></Com>   
        </FlexRow>
        <FlexRow>
            <Com title={`Skateboarding`} src={`https://www.liveabout.com/thmb/XZZCqjrbkW-CfaUHDHN6jPEdAI8=/2715x2715/smart/filters:no_upscale()/man-on-skateboard-in-mid-air-114997351-5a29a61822fa3a0037fac8a4.jpg`} descrip={`Skate in style, be with style.`}></Com>
            <Com title={`Color Matching`} src={`https://i.pinimg.com/originals/c9/0a/5b/c90a5b04193696b788ccc33d0d97737a.jpg`} descrip={`Is this good with that? let us decide`}></Com>
            <Com title={`Poolwear`} src={`https://us.123rf.com/450wm/dmitrytsvetkov/dmitrytsvetkov1806/dmitrytsvetkov180601769/103354008-young-slim-tanned-woman-in-black-swimsuit-posing-against-blue-background-fashion-portrait-of-beautif.jpg?ver=6`} descrip={`Don't forget the sunscreen!`}></Com>   
        </FlexRow>
        <FlexRow>
            <Com title={`Cocktail Evening`} src={`https://www.beyoung.in/blog/wp-content/uploads/2018/11/wirh-accessories.jpg`} descrip={`We can also recommend actual cocktails`}></Com>
            <Com title={`Party Look`} src={`https://ae05.alicdn.com/kf/Hca06b9eabc0641ea90cb53237741418eO/Sexy-Faux-Leather-Dress-Backless-Club-Party-Short-Dress-Solid-Black-Wet-Look-Latex-Bodycon-Push.jpg`} descrip={`We know how to party here`}></Com>
            <Com title={`90's`} src={`https://target.scene7.com/is/image/Target/GUEST_0e1b6b3e-274c-4c3b-a01e-e0de0a1a646a?wid=1000&hei=1000`} descrip={`Dress like you really want.`}></Com>   
        </FlexRow>
      </FlexColumn>
    </FactoryRoot>
  );
};
const FactoryRoot = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  height: 1948px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-width: 1438px;
`;
const Element10 = styled.div`
  height: 71px;
  position: relative;
  min-width: 1438px;
  margin: 0px 0px 42px 0px;
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
  width: 151px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 13px 16px 14px 16px;
  margin: 5px 0px 0px 0px;
`;
const Image37 = styled.img`
  width: 19px;
  height: 17px;
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
const Element11 = styled.div`
  width: 1119px;
  height: 93.5px;
  align-self: flex-start;
  position: relative;
  margin: 0px 0px 27.5px 144px;
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
  margin: 0px 0px 30px 0px;
`;
const Text6 = styled.div`
  width: 118px;
  height: 54px;
  font-size: 25px;
  font-family: SF Pro Display;
  font-weight: 300;
  position: absolute;
  top: 7px;
  left: 1145px;
`;
const Text7 = styled.div`
  width: 233px;
  height: 46px;
  font-size: 30px;
  font-family: SF Pro Display;
  font-weight: 600;
  position: absolute;
  left: 78px;
`;
const FlexColumn = styled.div`
  height: 1464px;
  display: flex;
  overflow: hidden;
  align-self: flex-end;
  flex-direction: column;
  justify-content: flex-start;
  padding: 17px 59.5px 17px 37px;
`;
const Text8 = styled.div`
  width: 417px;
  height: 46px;
  font-size: 30px;
  font-family: SF Pro Display;
  font-weight: 600;
  align-self: flex-start;
  margin: 0px 0px 21px 4px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0px 0px 79px 0px;
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






