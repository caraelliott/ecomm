import React, { useState } from "react";
import styled from "styled-components";
// import Placeholder from 'react-bootstrap/Placeholder';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Table from "react-bootstrap/Table";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";

const GamesAPI = ({ handleAdd, data, genres }) => {
  const [detailss, setDetailss] = useState([]);

  const gameData = data;
  

  const toggleDetails = (id) => {
    // const found = detailss.find((element) => element == id);
    if (!detailss.find((element) => element === id)) {
      setDetailss([id]);
    } else {
      setDetailss([...detailss].filter((element) => element !== id));
    }
  };

 
  return (
    <>
      <GamesWrapper>
        {genres === "pc" || genres === "playstation" || genres === "switch" ? (
          <h1 className="title">
            {gameData[0].platform.charAt(0).toUpperCase() +
              gameData[0].platform.slice(1)}
          </h1>
        ) : (
          <h1 className="title">
            {genres.charAt(0).toUpperCase() + genres.slice(1)}
          </h1>
        )}

        {gameData.map((item) => {
          return (
            <div key={item.id}>
              <Card
                style={{
                  width: "15rem",
                  minHeight: "25rem",

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
                  <Card.Subtitle className="mb-2 text-muted" >£{item.price}</Card.Subtitle>

                  <Button
                    size="sm"
                    variant="link"
                    onClick={() => toggleDetails(item.id)}
                    // aria-controls="example-collapse-text"
                    // aria-expanded={open}
                  >
                    more info
                  </Button>
                  <Collapse
                    in={Boolean(detailss.find((element) => element === item.id)) }
                  >
                    <div id="example-collapse-text">
                      <Table responsive="sm">
                        <tbody>
                          <tr>
                            <td>Platform:</td>
                            <td>{item.platform}</td>
                          </tr>
                          <tr>
                            <td>Release Date:</td>
                            <td>{item.releaseDate}</td>
                          </tr>
                          <tr>
                            <td>Genre:</td>
                            <td>{item.genre}</td>
                          </tr>
                          <tr>
                            <td>
                              <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={() => handleAdd(item)}
                              >
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
