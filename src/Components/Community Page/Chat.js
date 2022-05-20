import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Chooser from "./choose";
export const Chat = () => {
  const arr = window.location.pathname.split('/');
  const id = arr[arr.length - 1];
  return (
    <NewRootRoot>
      <Chat1>
        <Element2>
          <BAR>
            <Israel src={"https://file.rendit.io/n/eU8x6yEXZnuz8WFUQKBY.svg"} />
            <Text1>HE</Text1>
            <Text2 width={"106px"}>WOMEN</Text2>
            <Text2 width={"59px"}>MEN</Text2>
            <Text2 width={"65px"}>KIDS</Text2>
            <WhiteRectangle />
            <WhiteFlexRow>
              <Image1
                src={"https://file.rendit.io/n/6VxCnMUR0kiMycgUNwP3.svg"}
              />
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
            src={"https://file.rendit.io/n/OhoW1xtYZKAMQdZcjtBh.svg"}
            left={"136px"}
          />
          <Image2
            src={"https://file.rendit.io/n/sNdSb2oi43ve4Sq8YiDL.svg"}
            left={"68px"}
          />
          <Image2
            src={"https://file.rendit.io/n/CKETeB2jxnbaVxFRpX8h.svg"}
            left={"0px"}
          />
          <Line src={"https://file.rendit.io/n/hR8tTxbHaA3drhz7vDY3.svg"} />
        </Element3>
        <FlexRow>
          <FlexColumn>
            <Text6>Weddings in Tel Aviv</Text6>
            <Element4>
              <Ellipse1>
                <Ellipse2>
                  <Bithreedots
                    src={"https://file.rendit.io/n/345KhQItnJTWaXsB2weH.svg"}
                  />
                </Ellipse2>
              </Ellipse1>
              <Ellipse3
                src={"https://file.rendit.io/n/SDgnBuGM8uI4paH1nx6P.png"}
              />
              <Ellipse4
                src={"https://file.rendit.io/n/tJQC8xm1Sgx3U1GMn60q.png"}
              />
              <Ellipse5
                src={"https://file.rendit.io/n/GUXOUgvO6fiSUhMjKEXH.png"}
              />
              <Ellipse6
                src={"https://file.rendit.io/n/kYCQ0iZEeS0V8NMguKr0.png"}
              />
              <Ellipse7
                src={"https://file.rendit.io/n/bCaUicmWVprDND6BoBfk.png"}
              />
              <Text7>33 Members</Text7>
              <Ellipse8
                src={"https://file.rendit.io/n/scsrum0Cax7EkRnPjZkt.png"}
              />
            </Element4>
          </FlexColumn>
          <Element5>
            <BlueFlexRow>
              <Image3
                src={"https://file.rendit.io/n/M5eXNWUTm4eVlXEUggYT.svg"}
              />
            </BlueFlexRow>
            <Text8>Join Community</Text8>
          </Element5>
          <Element6>
            <ScreaminGreenFlexRow>
              <Image3
                src={"https://file.rendit.io/n/t5jgYSY7Boxe8smKroWF.svg"}
              />
            </ScreaminGreenFlexRow>
            <Text9>Invite</Text9>
          </Element6>
        </FlexRow>
        <Line1 src={"https://file.rendit.io/n/duzMd6LjNgZiftqoNNlE.svg"} />
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
        <Line3 src={"https://file.rendit.io/n/uYlIkLKQyd6jL9csUUcK.svg"} />
        <Line2 src={"https://file.rendit.io/n/duzMd6LjNgZiftqoNNlE.svg"} />
        <Text13>20/05/2022</Text13>
        <BlueFlexRow1>
          <Text14>Text text text</Text14>
        </BlueFlexRow1>
        <FlexRow2 padding={"0px 36px"}>
          <Ellipse9 src={"https://file.rendit.io/n/wS2QYN6RHWUemzq4hjYK.png"} />
          <WhiteFlexRow1>
            <Text10 width={"289px"}>Text text text</Text10>
          </WhiteFlexRow1>
        </FlexRow2>
        <FlexRow2 padding={"0px 41px"}>
          <Ellipse11
            src={"https://file.rendit.io/n/7qav4W0ViGn75jAWWv7d.png"}
          />
          <WhiteFlexRow2>
            <Text10 width={"289px"}>Text text text</Text10>
          </WhiteFlexRow2>
        </FlexRow2>
        <FlexRow4>
          <Ellipse9 src={"https://file.rendit.io/n/wS2QYN6RHWUemzq4hjYK.png"} />
          <WhiteFlexRow3>
            <Text10 width={"289px"}>Text text text</Text10>
          </WhiteFlexRow3>
        </FlexRow4>
        <BlueFlexRow2>
          <Text14>Text text text</Text14>
        </BlueFlexRow2>
        <FlexRow5>
          <Fluentemojiregular
            src={"https://file.rendit.io/n/Me1cqG2MEzs0ajtcj9ip.svg"}
          />
          <Image4 src={"https://file.rendit.io/n/3LmQyAlGT3tsumJAuzuY.svg"} />
          <WhiteFlexRow4>
            <Text19>Start Typing..</Text19>
          </WhiteFlexRow4>
          <Ellipse>
            <Akariconssend
              src={"https://file.rendit.io/n/yWDblEd5JkGNjWkXwkf3.svg"}
            />
          </Ellipse>
        </FlexRow5>
      </Chat1>
    </NewRootRoot>
  );
};
const NewRootRoot = styled.div`
  height: 1937px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-width: 1438px;
  align-items: center;
  padding: 0px 1px;
`;
const Chat1 = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  width: 1438px;
  height: 1935px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
`;
const Element2 = styled.div`
  height: 69px;
  position: relative;
  min-width: 1434px;
  margin: 0px 0px 31px 0px;
`;
const BAR = styled.div`
  width: 1375px;
  background-color: #5f6566;
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px 27px 0px 32px;
`;
const Israel = styled.img`
  width: 37px;
  height: 37px;
  align-self: flex-start;
  margin: 11px 9px 0px 0px;
`;
const Text1 = styled.div`
  width: 49px;
  height: 31px;
  font-size: 25px;
  font-family: SF Pro Display;
  font-weight: 500;
  color: #ffffff;
  align-self: center;
  margin: 0px 63px 0px 0px;
`;
const WhiteRectangle = styled.div`
  width: 281px;
  height: 62px;
  background-color: #ffffff;
  align-self: center;
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
  margin: 3px 0px 0px 0px;
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
  top: 15px;
  left: 559px;
`;
const Element3 = styled.div`
  width: 1119px;
  height: 93.5px;
  align-self: flex-start;
  position: relative;
  margin: 0px 0px 37.5px 142px;
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
  display: flex;
  flex-direction: row;
  padding: 0px 173px 0px 147px;
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
const Element4 = styled.div`
  align-self: stretch;
  height: 57px;
  position: relative;
  min-width: 459px;
`;
const Ellipse1 = styled.div`
  background-image: url("https://file.rendit.io/n/AfwQM5AG3hVRJRXBQ0JZ.png");
  background-size: cover;
  position: absolute;
  left: 402px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Ellipse2 = styled.div`
  height: 57px;
  background-image: url("https://file.rendit.io/n/9U2dR85CiIcRozHw0ycQ.svg");
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
const Ellipse3 = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 365px;
`;
const Ellipse4 = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 336px;
`;
const Ellipse5 = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 301px;
`;
const Ellipse6 = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 270px;
`;
const Ellipse7 = styled.img`
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
const Ellipse8 = styled.img`
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
  align-self: flex-start;
  margin: 0px 0px 21px 142.5px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 62px;
  align-items: center;
  margin: 0px 0px 8px 0px;
`;
const Line3 = styled.img`
  width: 110px;
  height: 5px;
  align-self: flex-end;
  margin: 0px 470.5px 1px 0px;
`;
const Line2 = styled.img`
  width: 1116px;
  height: 1px;
  align-self: flex-start;
  margin: 0px 0px 21px 138.5px;
`;
const Text13 = styled.div`
  text-align: center;
  width: 197px;
  height: 46px;
  font-size: 30px;
  font-family: SF Pro Display;
  font-weight: 300;
  align-self: center;
  margin: 0px 0px 80px 0px;
`;
const BlueFlexRow1 = styled.div`
  width: 491px;
  background-color: #256bf2;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  padding: 34px 53px;
  margin: 0px 86px 56px 0px;
`;
const WhiteFlexRow1 = styled.div`
  width: 529px;
  background-color: #e5e5ea;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  padding: 34px;
`;
const Ellipse11 = styled.img`
  width: 85px;
  height: 85px;
  align-self: flex-start;
  margin: 15px 0px 0px 0px;
`;
const WhiteFlexRow2 = styled.div`
  width: 539px;
  background-color: #e5e5ea;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  padding: 34px 29px 160px 29px;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 28px;
  align-items: center;
  padding: 0px 35px;
  margin: 0px 0px 91px 0px;
`;
const WhiteFlexRow3 = styled.div`
  width: 527px;
  background-color: #e5e5ea;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  padding: 34px 35px;
`;
const BlueFlexRow2 = styled.div`
  width: 489px;
  background-color: #256bf2;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  padding: 34px 54px;
  margin: 0px 66px 140px 0px;
`;
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 66px 0px 45px;
`;
const Fluentemojiregular = styled.img`
  width: 61px;
  height: 61px;
  align-self: flex-start;
  margin: 18px 28px 0px 0px;
`;
const Image4 = styled.img`
  width: 69px;
  height: 58px;
  align-self: flex-start;
  margin: 19px 23px 0px 0px;
`;
const WhiteFlexRow4 = styled.div`
  width: 885px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  padding: 28px 61px 27px 61px;
  margin: 0px 38px 0px 0px;
`;
const Text19 = styled.div`
  width: 301px;
  height: 46px;
  font-size: 35px;
  font-family: SF Pro Display;
  font-weight: 500;
  color: #b4acac;
`;
const Ellipse = styled.div`
  background-image: url("https://file.rendit.io/n/Bvx8xnusgJIvGj1dVEEl.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 21px 19px 23px 26px;
`;
const Akariconssend = styled.img`
  width: 52px;
  height: 53px;
`;
const Text2 = styled.div`
  height: 51px;
  font-size: 25px;
  font-family: Noto Sans Hebrew;
  font-weight: 400;
  color: #ffffff;
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
const Text14 = styled.div`
  width: 289px;
  height: 46px;
  font-size: 35px;
  font-family: SF Pro Display;
  font-weight: 500;
  color: #ffffff;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 28px;
  align-items: center;
  margin: 0px 0px 82px 0px;
  padding: ${(props) => props.padding};
`;
const Ellipse9 = styled.img`
  width: 85px;
  height: 85px;
`;
