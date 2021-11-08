import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import { IoLogoGameControllerB } from "react-icons/io";
import { ImFire } from "react-icons/im";

import {
  SiApplearcade,
  SiWindows,
  SiPlaystation,
  SiNintendoswitch,
  SiApostrophe,
} from "react-icons/si";
import Button from "react-bootstrap/Button";
import GamesAPI from "./GamesAPI";

const NavbarVertical = ({basket, setBasket, setUser }) => {
  const [data, setData] = useState([]);
  const [gameGenre, setgameGenre] = useState("");

  const logout = () => {
    setUser({});
  };
  useEffect(() => {
    const handleFetchGame = async () => {
      // let newData = {};

      try {
        const reg = await fetch(
          `${process.env.REACT_APP_BASE_URL}/product/${gameGenre}`,
          {
            mode: "cors",
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await reg.json();
        const gameData = data.data;
        setData(gameData);
        // setgameGenre(genre);
        console.log("genre is ", { gameGenre });
        // console.log(gameData);

        // newData = await response.json();
        // const dataResult = newData.results
        // console.log("New Data is" ,dataResult);
        //  setData(dataResult);
      } catch (error) {
        console.log("error is ", error);
      }
    };handleFetchGame()
  }, [gameGenre]);

  return (
    <PageForm>
      {/* <VerticalNav> */}

      <Nav justify className=" flex-column  " style={{ color: "white" }}>
        <Nav.Item style={{ color: "white" }}>
          <h4>
            <IoLogoGameControllerB style={{ color: "white" }} />
            Play
          </h4>
        </Nav.Item>
        <br />

        <Nav.Item>
          <h4>Genre</h4>
          <Nav fill className=" flex-column  " style={{ color: "white" }}>
            <Nav.Item onClick={() =>setgameGenre("action")}>
              <ImFire style={{ color: "white" }} /> Action
            </Nav.Item>

            <Nav.Item onClick={() =>setgameGenre("strategy")}>
              <SiApplearcade style={{ color: "white" }} /> Strategy
            </Nav.Item>

            <Nav.Item onClick={() =>setgameGenre("adventure")}>
              <SiApplearcade style={{ color: "white" }} /> Adventure
            </Nav.Item>

            <Nav.Item onClick={() =>setgameGenre("puzzle")}>
              <SiApplearcade style={{ color: "white" }} /> Puzzle
            </Nav.Item>
          </Nav>
        </Nav.Item>
        <br />

        <Nav.Item href="#Item-2">
          <h4>Platform</h4>
          <Nav fill className=" flex-column  " style={{ color: "white" }}>
            <Nav.Item onClick={() =>setgameGenre("pc")}>
              <SiWindows style={{ color: "white" }} /> PC
            </Nav.Item>

            <Nav.Item onClick={() =>setgameGenre("playstation")}>
              <SiPlaystation style={{ color: "white" }} /> PlayStation
            </Nav.Item>

            <Nav.Item onClick={() =>setgameGenre("switch")}>
              <SiNintendoswitch style={{ color: "white" }} /> Nintendo Switch
            </Nav.Item>
          </Nav>
        </Nav.Item>
        <br />
        <Nav.Item href="#Item-3">
          <h4>
            <SiApostrophe style={{ color: "white" }} />
            Top 10
          </h4>
        </Nav.Item>
        <br />
        <Nav.Item>
          <Button variant="dark" onClick={logout}>
            Logout
          </Button>
        </Nav.Item>
        {/* <button type="button" onClick={logout}>Logout</button> */}
      </Nav>

      {/* </VerticalNav> */}
      {data.length > 0 ? (
        <GamesAPI basket={basket} setBasket={setBasket} data={data} genres={gameGenre} />
      ) : (
        <p>Loading..</p>
      )}
    </PageForm>
  );
};

// const VerticalNav = styled.div`
//   display: flex;
//   padding-top: 30px;

// `;

const PageForm = styled.div`
  // border:2px solid red;
  display: flex;
  // height:70vh;
`;
export default NavbarVertical;
