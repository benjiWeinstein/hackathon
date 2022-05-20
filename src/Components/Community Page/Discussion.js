import { Input } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Chooser from "./choose";
import { useState } from "react";
import NewPost from "./NewPost";
export const Discussion = () => {
  const [showPost,setShowPost] = useState(false)
    const postDescrip = "Anyone have reccomendations for a similar dress? Maybe in blue?"
    const arr = window.location.pathname.split('/');
    const id = arr[arr.length - 1];
  return (
    <JoinCommunityRoot>
      <Element2>
        <BAR>
          <Israel src={"https://file.rendit.io/n/n7mjzfEkPussXU6OWHhv.svg"} />
          <Text1>HE</Text1>
          <Text2 width={"106px"}>WOMEN</Text2>
          <Text2 width={"59px"}>MEN</Text2>
          <Text2 width={"65px"}>KIDS</Text2>
          <WhiteRectangle />
          <WhiteFlexRow>
            <Image1 src={"https://file.rendit.io/n/MZgPBUOfPpHGgmVyb7aY.svg"} />
          </WhiteFlexRow>
        </BAR>
        <Text5>OUR COMMUNITY</Text5>
      </Element2>
      <Element3>
        <FACTORY2>
          F A C T O R Y<FACTORY fontWeight={"400"}> </FACTORY>
          <FACTORY fontWeight={"600"}>5 4</FACTORY>
        </FACTORY2>
        <Image2
          src={"https://file.rendit.io/n/KocRr8UPqKuSewV2BaYc.svg"}
          left={"136px"}
        />
        <Image2
          src={"https://file.rendit.io/n/X6mEg7Wiu7yUkLPtFuCE.svg"}
          left={"68px"}
        />
        <Image2
          src={"https://file.rendit.io/n/Bgl8cQIjc4UdU1S0lIl4.svg"}
          left={"0px"}
        />
        <Line src={"https://file.rendit.io/n/BMTA0iMBeoLnYFNTGtX4.svg"} />
      </Element3>
      <FlexRow>
        <FlexColumn>
          <Text6 margin={"0"}>{id.replaceAll("%20", " ")}</Text6>
          <Element4>
            <Ellipse>
              <Ellipse1>
                <Bithreedots
                  src={"https://file.rendit.io/n/0tPLCFhopw3KFUrsQkDw.svg"}
                />
              </Ellipse1>
            </Ellipse>
            <Ellipse2
              src={"https://file.rendit.io/n/psY2WQIGyx0gHJk2tKPT.png"}
            />
            <Ellipse3
              src={"https://file.rendit.io/n/d4Wvz5jA95b20h8QKDJ9.png"}
            />
            <Ellipse4
              src={"https://file.rendit.io/n/4TjvyMquJKC2FFRVhLmi.png"}
            />
            <Ellipse5
              src={"https://file.rendit.io/n/WMvgXAlyvqixtmhsG0wX.png"}
            />
            <Ellipse6
              src={"https://file.rendit.io/n/YV3qZi6O78Fpr6OBS7qn.png"}
            />
            <Text7>33 Members</Text7>
            <Ellipse7
              src={"https://file.rendit.io/n/6udpGoi9AoIMfebPzldV.png"}
            />
          </Element4>
        </FlexColumn>
        <Element5>
          <BlueFlexRow>
            <Image3 src={"https://file.rendit.io/n/tKS3GujOSKB4ztlm0hRf.svg"} />
          </BlueFlexRow>
          <Text8>Join Community</Text8>
        </Element5>
        <Element6>
          <ScreaminGreenFlexRow>
            <Image3 src={"https://file.rendit.io/n/2Ddjs7iycVz0DO0T2Xxt.svg"} />
          </ScreaminGreenFlexRow>
          <Text9>Invite</Text9>
        </Element6>
      </FlexRow>
      <Line1 src={"https://file.rendit.io/n/Qp8x1EX9PwVKXo1xV8WM.svg"} />
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
         return <Chooser width={width} text={text} id={id}></Chooser>
        })}
      </FlexRow1>
      <Line3 src={"https://file.rendit.io/n/8YNwROZMo5C6E7VGcpcy.svg"} />
      <Line2 src={"https://file.rendit.io/n/Qp8x1EX9PwVKXo1xV8WM.svg"} />
      <WhiteFlexRow1>
        <Ellipse8 src={"https://file.rendit.io/n/ASBbJzRuxRsoFlVsUJUr.png"} />
        <FlexColumn1>
          <WhiteFlexRow2>
            <Text13>
                <Input style={{width:"700px"}}type="text" placeholder=" Write something.."></Input>
              </Text13>
          </WhiteFlexRow2>
          <FlexRow2>
            <FernFlexRow>
              <Image4
                src={"https://file.rendit.io/n/8bmTwU4Y7vrzXgTyBRbz.svg"}
              />
              <Text14>Add Photo</Text14>
            </FernFlexRow>
            <BlueFlexRow1>
              <Text15>Post</Text15>
              <div onClick={()=>{
                setShowPost(!showPost)
                console('clicked', showPost)
              }}>
                <Akariconssend
                  src={"https://file.rendit.io/n/jYnwXhyMa6UcN6Wc2i2p.svg"}
                />
              </div>
            </BlueFlexRow1>
          </FlexRow2>
        </FlexColumn1>
      </WhiteFlexRow1>
      <Text6 margin={"0px 0px 19px 145px"}>Newest Activity</Text6>
      <br></br>
      {showPost && <NewPost></NewPost>}
      <br></br>
      <WhiteFlexColumn>
        <FlexRow3>
          <Ellipse8 src={"https://file.rendit.io/n/UBPKfxQqIF2BobALjCZw.png"} />
          <FlexColumn2>
            <Text6 margin={"0"}>Jenny Goldstein </Text6>
            <Text17>{`${postDescrip}`}</Text17>
          </FlexColumn2>
        </FlexRow3>
        <Image5 src={"https://file.rendit.io/n/HSeOlqQWzyqa7KWhjlKf.png"} />
        <FlexRow4>
          <Ellipse10>
            <Antdesignliketwotone
              src={"https://file.rendit.io/n/DKjlwxJDvYlfVBhiH89t.svg"}
            />
          </Ellipse10>
          <Text18>23</Text18>
          <FlexRow5>
            <Image6 src={"https://file.rendit.io/n/dhqr0aXnjEz48qXYhwIe.svg"} />
            <Text19>24 Comments</Text19>
          </FlexRow5>
        </FlexRow4>
        <Line4 src={"https://file.rendit.io/n/CjyiRuVDEYbALjDcWLuu.svg"} />
        <FlexRow6>
          <Image7 src={"https://file.rendit.io/n/Ydr7Zu4CXm6Z4jEB1qtM.svg"} />
          <Text20>Like</Text20>
          <Line5 src={"https://file.rendit.io/n/pbZECazOiBLUbPgCNIR8.svg"} />
          <Image8 src={"https://file.rendit.io/n/T0MRCbbNkxXZcNZ6KZGe.svg"} />
          <Text21>Comment</Text21>
        </FlexRow6>
      </WhiteFlexColumn>
      <br></br>
      <br></br>
    </JoinCommunityRoot>

  );
};
const JoinCommunityRoot = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  height: 1935px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  min-width: 1438px;
  align-items: flex-start;
`;
const Element2 = styled.div`
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
const Element3 = styled.div`
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
const Element4 = styled.div`
  align-self: stretch;
  height: 57px;
  position: relative;
  min-width: 459px;
`;
const Ellipse = styled.div`
  background-image: url("https://file.rendit.io/n/tmd9cls81nXypNS7YfuS.png");
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
  background-image: url("https://file.rendit.io/n/9Uy9Gf1meJwDOssMtPv8.svg");
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
const Element5 = styled.div`
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
const Element6 = styled.div`
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
  width: 172px;
  height: 5px;
  align-self: center;
  margin: 0px 40px 0px 0px;
`;
const Line2 = styled.img`
  width: 1116px;
  height: 1px;
  margin: 0px 0px 28px 140.5px;
`;
const WhiteFlexRow1 = styled.div`
  border-width: 1px;
  border-color: #f0f0f0;
  border-style: solid;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 1029px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 42px;
  align-items: flex-start;
  border-radius: 20px;
  padding: 59px 43px 25px 43px;
  margin: 0px 0px 48px 115px;
`;
const FlexColumn1 = styled.div`
  align-self: stretch;
  width: 840px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const WhiteFlexRow2 = styled.div`
  width: 756px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  padding: 34px 42px 0px 42px;
`;
const Text13 = styled.div`
  width: 545px;
  height: 67px;

  font-family: SF Pro Display;
  font-weight: 500;
`;
const FlexRow2 = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 414px;
  align-items: flex-start;
`;
const FernFlexRow = styled.div`
  width: 244px;
  height: 49.06px;
  background-color: rgba(59, 147, 45, 0.31);
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;
  padding: 9.3px 0px 12.64px 0px;
`;
const Image4 = styled.img`
  width: 56px;
  height: 47.3px;
`;
const Text14 = styled.div`
  width: 147px;
  height: 42.3px;
  font-size: 30px;
  font-family: SF Pro Display;
  font-weight: 400;
  align-self: flex-end;
`;
const BlueFlexRow1 = styled.div`
  background-color: #256bf2;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  gap: 17px;
  align-items: center;
  border-radius: 20px;
  padding: 11px 20px 13px 27px;
`;
const Text15 = styled.div`
  width: 61px;
  height: 42px;
  font-size: 30px;
  font-family: SF Pro Display;
  font-weight: 500;
  color: #ffffff;
  align-self: flex-end;
`;
const Akariconssend = styled.img`
  width: 47px;
  height: 47px;
`;
const WhiteFlexColumn = styled.div`
  border-width: 1px;
  border-color: #f0f0f0;
  border-style: solid;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 985px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  padding: 12px 33.5px 12px 62px;
  margin: 0px 0px 0px 115px;
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  align-items: flex-start;
  padding: 0px 7px;
  margin: 0px 0px 44px 0px;
`;
const FlexColumn2 = styled.div`
  align-self: stretch;
  width: 582px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  flex-grow: 1;
  align-items: flex-start;
  
`;
const Text17 = styled.div`
  width: 567px;
  height: 46px;
  font-size: 40px;
  font-family: SF Pro Display;
  font-weight: 400;
  align-self: flex-start;
  margin-bottom: 25px;
`;
const Image5 = styled.img`
  width: 543px;
  height: 630px;
  align-self: center;
  margin: 0px 0px 16px 0px;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
  margin: 0px 0px 22px 0px;
`;
const Ellipse10 = styled.div`
  background-image: url("https://file.rendit.io/n/Dc4lFHhC5A6PQawg9Bm4.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 7px 12px 8px;
`;
const Antdesignliketwotone = styled.img`
  width: 46px;
  height: 41px;
`;
const Text18 = styled.div`
  width: 65px;
  height: 46px;
  font-size: 35px;
  font-family: SF Pro Display;
  font-weight: 300;
  align-self: flex-end;
  margin: 0px 0px 5px 0px;
`;
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Image6 = styled.img`
  width: 53px;
  height: 53px;
`;
const Text19 = styled.div`
  width: 150px;
  height: 30px;
  font-size: 25px;
  font-family: SF Pro Display;
  font-weight: 400;
`;
const Line4 = styled.img`
  width: 1011px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 10px 0px;
`;
const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 267.5px 0px 327px;
`;
const Image7 = styled.img`
  width: 46px;
  height: 41px;
  margin: 10px 7px 0px 0px;
`;
const Text20 = styled.div`
  width: 65px;
  height: 46px;
  font-size: 30px;
  font-family: SF Pro Display;
  font-weight: 500;
  color: #b4acac;
  align-self: flex-end;
  margin: 0px 43.5px 7px 0px;
`;
const Line5 = styled.img`
  width: 1px;
  height: 66px;
  align-self: center;
  margin: 0px 50.5px 0px 0px;
`;
const Image8 = styled.img`
  width: 46px;
  height: 43px;
  margin: 11px 7px 0px 0px;
`;
const Text21 = styled.div`
  width: 159px;
  height: 46px;
  font-size: 30px;
  font-family: SF Pro Display;
  font-weight: 500;
  color: #b4acac;
  align-self: flex-end;
  margin: 0px 0px 7px 0px;
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
const Text6 = styled.div`
  width: 428px;
  height: 46px;
  font-size: 40px;
  font-family: SF Pro Display;
  font-weight: 600;
  margin: ${(props) => props.margin};
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
const Ellipse8 = styled.img`
  width: 101px;
  height: 101px;
`;
