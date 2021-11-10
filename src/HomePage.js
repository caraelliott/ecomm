import React, { useState, useEffect } from "react";
import NavbarHead from "./components/NavbarHead";
import NavbarVertical from "./components/NavbarVertical";
import styled, { createGlobalStyle } from "styled-components";
import BackImage from "./assets/background.png";

function HomePage({ user, setUser }) {
  const [basket, setBasket] = useState([]);
  const [purchHistory, setPurchHistory] = useState([]);

  useEffect(() => {
    const callBasket = async () => {
      const obj = JSON.stringify({
        email: user.email,
      });
      const req = await fetch(`${process.env.REACT_APP_BASE_URL}/basket`, {
        mode: "cors",
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: obj,
      });

      const data = await req.json();
      console.log(data);
      setBasket(data.data);
    };

    const callPurchase = async () => {
      const obj = JSON.stringify({
        email: user.email,
      });
      const req = await fetch(`${process.env.REACT_APP_BASE_URL}/order/user`, {
        mode: "cors",
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: obj,
      });
      const data = await req.json();
      console.log("purchase history", data);
      setPurchHistory(data.data);
    };

    callBasket();
    callPurchase();
  }, [user.email]);

  const handleAdd = (item) => {
    const exist = basket.find((element) => element.id === item.id);
    if (exist) {
      setBasket(
        basket.map((element) =>
          item.id === element.id ? { ...exist, qty: exist.qty + 1 } : element
        )
      );
    } else {
      setBasket([...basket, { ...item, qty: 1 }]);
    }
  };

  return (
    <>
      {user.email ? (
        <div>
          <GlobalStyle />
          <HomePageWrapper>
            <NavbarHead
              user={user}
              handleAdd={handleAdd}
              basket={basket}
              setBasket={setBasket}
              purchHistory ={purchHistory}
              setPurchHistory={setPurchHistory}
            />
            <NavbarVertical
              handleAdd={handleAdd}
              basket={basket}
              setBasket={setBasket}
              setUser={setUser}
            />
          </HomePageWrapper>
        </div>
      ) : (
        <div>
          <p>"You do not access"</p>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
}

export default HomePage;

const GlobalStyle = createGlobalStyle`
body {
//   margin: 10px;

  background-image: url(${BackImage});
  background-size: cover;
  overflow-y: auto;
  overflow-x: hidden;
}`;
const HomePageWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 95vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 20px;
  color: white;
  -webkit-box-shadow: -20px -20px 21px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -20px -20px 21px -4px rgba(0, 0, 0, 0.75);
  box-shadow: -20px -20px 21px -4px rgba(0, 0, 0, 0.75);
`;
