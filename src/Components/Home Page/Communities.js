import React from "react";
import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

const Com = ({ src, descrip, title }) => {
  return (
    <Link to={`/about/${title}`}>
      <Element13>
        <Image39 src={`${src}`} />
        <FlexRow1>
          <Element14>
            <Text9>+30</Text9>
            <Text10>{`${title}`}</Text10>
            <Text11 left={"6px"}>{`${descrip}`}</Text11>
            <FlexRow2 left={"6px"}>
              <Element15>
                {[
                  {
                    src: "https://file.rendit.io/n/d3Wn7iOzVqVJaVbu86Cl.png",
                    left: "63px",
                  },
                  {
                    src: "https://file.rendit.io/n/UJVZVrhBojrP0VBoBpSH.png",
                    left: "32px",
                  },
                  {
                    src: "https://file.rendit.io/n/yrEwBeHdUpFyl8nykSwX.png",
                    left: "0px",
                  },
                ].map((data) => (
                  <Image33 left={data.left} src={data.src} />
                ))}
              </Element15>
              <Image36
                src={"https://file.rendit.io/n/qu5v31Xrnu9COs3YT9TA.png"}
              />
            </FlexRow2>
          </Element14>
        </FlexRow1>
      </Element13>
    </Link>
  );
};

const Element13 = styled.div`
  width: 389px;
  height: 408px;
  position: relative;
  flex-grow: 1;
  margin: 0px 59px 0px 0px;

`;
const Image39 = styled.img`
  width: 384px;
  height: 404px;
  position: absolute;
`;
const FlexRow1 = styled.div`
  width: 350px;
  background-image: url("https://file.rendit.io/n/YZLoIcOMWsJTRXydO5sD.svg");
  background-size: cover;
  position: absolute;
  top: 242px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 19px 17px;

`;
const Element14 = styled.div`
  width: 341px;
  height: 124px;
  position: relative;
`;
const Text9 = styled.div`
  width: 22.8px;
  height: 22.8px;
  display: flex;
  font-size: 10px;
  font-family: SF Pro Display;
  font-weight: 400;
  color: #3c3c3c;
  position: absolute;
  top: 94px;
  left: 115px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Element17 = styled.div`
  height: 124px;
  position: relative;
  min-width: 339px;
`;
const Element18 = styled.div`
  width: 337px;
  height: 124px;
  position: absolute;
  left: 2px;
`;
const Element21 = styled.div`
  height: 124px;
  position: relative;
  min-width: 338px;
`;
const Element22 = styled.div`
  width: 337px;
  height: 124px;
  position: absolute;
  left: 1px;
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
const Text10 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: SF Pro Display;
  font-weight: 700;
  position: absolute;
`;
const Text11 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: SF Pro Display;
  font-weight: 400;
  position: absolute;
  top: 32px;
  left: ${(props) => props.left};
`;
const FlexRow2 = styled.div`
  width: 337px;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  left: ${(props) => props.left};
`;
const Element15 = styled.div`
  align-self: stretch;
  width: 101px;
  height: 124px;
  position: relative;
  flex-grow: 1;
`;
const Image33 = styled.img`
  width: 38px;
  height: 38px;
  position: absolute;
  top: 86px;
  left: ${(props) => props.left};
`;
const Image36 = styled.img`
  width: 38px;
  height: 38px;
`;
const Element16 = styled.div`
  width: 387.5px;
  height: 408px;
  position: relative;
  flex-grow: 1;
  margin: ${(props) => props.margin};
`;
const TimberwolfFlexColumn = styled.div`
  height: 366px;
  background-color: #d9d9d9;
  display: flex;
  position: absolute;
  top: 1px;
  flex-direction: column;
  justify-content: flex-end;
  gap: 79px;
  align-items: center;
  border-radius: 20px;
  padding: ${(props) => props.padding};
`;
const Biimagefill = styled.img`
  width: 123px;
  height: 123px;
`;
const Text14 = styled.div`
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
const Line1 = styled.img`
  width: 386px;
  height: 1px;
  position: absolute;
  left: 0.5px;
  top: ${(props) => props.top};
`;
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 66.5px;
  justify-content: space-between;
  margin: ${(props) => props.margin};
`;
const Element24 = styled.div`
  width: 387.5px;
  height: 406px;
  position: relative;
  flex-grow: 1;
`;
const TimberwolfFlexColumn2 = styled.div`
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
const Element25 = styled.div`
  height: 124px;
  position: relative;
  min-width: 343px;
`;
const Element26 = styled.div`
  width: 337px;
  height: 124px;
  position: absolute;
  left: 6px;
`;

export default Com;
