import React, { useState } from "react";
import styled from "styled-components";
// import Placeholder from 'react-bootstrap/Placeholder';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Table from "react-bootstrap/Table";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";

const GamesAPI = ({ data, genres }) => {
  const [open, setOpen] = useState(false);
  console.log(genres);
  const genre = genres;
  const gameData = data;
  // const genre= gameData[0].genre

  console.log(gameData);

  return (
    <>
      <GamesWrapper>
        {genre === "pc" || genre === "playstation" || genre === "switch" ? (
          <h1 className="title">
            {gameData[0].platform.charAt(0).toUpperCase() +
              gameData[0].platform.slice(1)}
          </h1>
        ) : (
          <h1 className="title">
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </h1>
        )}

        {gameData.map((item) => {
          return (
              
            <div key={item.id}>
            
              <Card
              
                style={{
                  width: "15rem",
                  backgroundColor: "rgb(54,69,79)",
                  border: "1px solid white",
                  margin: "0.2rem",
                  borderRadius: "10px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.imageUrl}
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>{item.productName}</Card.Title>

                  {/* <Card.Text>
                       Release date: {item.releaseDate}
                      </Card.Text> */}
                  <Button
                    size="sm"
                    variant="link"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    more info
                  </Button>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <Table responsive="sm">
                        <tbody>
                          <tr>
                            <td>Platform</td>
                            <td>{item.platform}</td>
                          </tr>
                          <tr>
                            <td>Release Date:</td>
                            <td>{item.releaseDate}</td>
                          </tr>
                          <tr>
                            <td>Genres:</td>
                            <td>{genre}</td>
                          </tr>
                          <tr>
                            <td>
                              <Button variant="outline-primary" size="sm">
                                <MdOutlineAddShoppingCart size={20} />
                              </Button>
                            </td>
                            <td>
                              <Button variant="outline-primary" size="sm">
                                <RiMovieLine size={20} /> Trailer
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Collapse>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </GamesWrapper>
    </>
  );
};

const GamesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 20px;
  // margin-left :30px;
  width: 85vw;
  height: 80vh;
  background-color: black;
  overflow-y: scroll;
  color: white;
  padding-top: 0.3rem;
  .title {
    flex: 0 0 100%;
    padding-left: 2rem;
  }
`;

export default GamesAPI;
