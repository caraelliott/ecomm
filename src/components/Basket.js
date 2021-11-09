import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiFillDelete,
} from "react-icons/ai";
import Button from "react-bootstrap/Button";

const Basket = ({ user, handleAdd, basket, setBasket, show, onHide }) => {
  console.log(basket);

  const totalPrice = basket.reduce(
    (previous, current) =>Number(( previous + current.price * current.qty).toFixed(2)),
    0
  );
  const taxPrice =Number((totalPrice * 0.1).toFixed(2));
  const shippingCost = totalPrice > 50 || totalPrice === 0 ? 0 : 10;
  const TotalCost = Number((totalPrice + taxPrice + shippingCost).toFixed(2));
  // console.log('useremail', user.email)
  const basketId = basket.map((item) => {
    return { productId: item.id, quantity: item.qty };
  });

  const handleDecrease = (item) => {
    const exist = basket.find((element) => element.id === item.id);
    if (exist.qty === 1) {
      setBasket(
        [...basket].filter(
          (element) => element.productName !== item.productName
        )
      );
    } else {
      setBasket(
        basket.map((element) =>
          item.id === element.id ? { ...exist, qty: exist.qty - 1 } : element
        )
      );
    }
  };
  const handleDel = (item) =>
    setBasket(
      [...basket].filter((element) => element.productName !== item.productName)
    );

  const handleSave = async () => {
    try {
      const obj = JSON.stringify({
        customer: { email: user.email },
        order: basketId,
      });
      console.log("object", obj);

      await fetch(`${process.env.REACT_APP_BASE_URL}/basket`, {
        mode: "cors",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: obj,
      });
    } catch (error) {
      console.log("error is ", error);
    }
  };

  return (
    <div>
      <Offcanvas
        show={show}
        onHide={onHide}
        placement="end"
        style={{ width: "40vw", backgroundColor: "rgb(255,255,255,0.9)" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Basket </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table responsive="sm">
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th>Game</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item) => (
                <tr key={item.id}>
                  <td>
                    <AiFillDelete onClick={() => handleDel(item)} />
                    &nbsp;
                    {item.productName}
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <AiOutlineMinusSquare
                      onClick={() => handleDecrease(item)}
                    />
                    &nbsp;
                    {item.qty}&nbsp;
                    <AiOutlinePlusSquare onClick={() => handleAdd(item)} />
                  </td>
                  <td style={{ textAlign: "end" }}>£{Number((item.qty * item.price).toFixed(2))}</td>
                </tr>
              ))}
            </tbody>

            <tbody>
              <tr>
                <td colSpan="3">Total: </td>

                <td style={{ textAlign: "end" }}>£{totalPrice}</td>
              </tr>

              <tr>
                <td colSpan="3">Tax @ 10%</td>

                <td style={{ textAlign: "end" }}>£{taxPrice}</td>
              </tr>
              <tr>
                <td colSpan="3">
                  Shipping Cost
                  <br />
                  (free shipping if you spend 50 and above)
                </td>
                <td style={{ textAlign: "end" }}>£{shippingCost}</td>
              </tr>
              <tr>
                <td colSpan="3">Total to pay:</td>
                <td style={{ textAlign: "end" }}>£{TotalCost}</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td>
                  <Button variant="outline-dark" onClick={handleSave}>
                    saveBasket
                  </Button>
                </td>
                <td>
                  <Button variant="outline-dark">Purchase</Button>
                </td>
              </tr>
            </tfoot>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Basket;
