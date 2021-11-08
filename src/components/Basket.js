import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from 'react-bootstrap/Table'

const Basket = ({ basket, setBasket, show, onHide }) => {
  const handleDel = (item) =>
    setBasket(
      [...basket].filter((element) => element.productName !== item.productName)
    );

  return (
    <div>
      <Offcanvas show={show} onHide={onHide} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Basket </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Table responsive="sm">
                   <thead>
                         <tr><th>Game</th>
                         <th>Price</th>
                         <th>Quantity</th>
                         <th>Total</th>
                         </tr>
                         </thead>
          {basket.map((item) => (
              <tbody>
              <tr><td><button onClick={() => handleDel(item)}>X</button>&nbsp;{item.productName}</td>
              <td>{item.price}</td>
              <td>counter</td>
              <td>item total</td>
              </tr>
              </tbody>
              

          ))}
         
                </Table>
          <p>Total: £{basket.reduce((previous, current) => previous + current.price, 0)}</p>

        </Offcanvas.Body>
        
      </Offcanvas>
    </div>
  );
};

export default Basket;

{/* 
            <p>
              <button onClick={() => handleDel(item)}>X</button>&nbsp;
              {item.productName}{" "}
            </p> */}
            