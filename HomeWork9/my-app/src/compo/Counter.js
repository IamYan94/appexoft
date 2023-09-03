import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-image: url("https://miro.medium.com/v2/resize:fit:1200/1*ZjjttxL-nFpsvhDsSfzc-g.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
`;
const Value = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: rgb(1, 173, 173);
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgb(1, 173, 173);
  color: black;
  border: none;
  cursor: pointer;
`;

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter((prev) => prev + 1);

  const decrementCounter = () => setCounter((prev) => prev - 1);

  const resetCounter = () => setCounter(0);

  return (
    <Container>
      <Value>Counter: {counter}</Value>
      <Button onClick={incrementCounter}>
        <img
          src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-plus-icon-png-image_4224613.jpg"
          alt="Increment"
          width="32"
          height="32"
        />{" "}
        Increment me
      </Button>
      <Button onClick={resetCounter}>
        <img
          src="https://thumbnail.imgbin.com/17/10/15/imgbin-reset-button-computer-icons-reset-s-s9ex0AaM4EwZJiChD2qYr7HvW_t.jpg"
          alt="Reset"
          width="32"
          height="32"
        />{" "}
        Reset Value
      </Button>
      <Button onClick={decrementCounter}>
        <img
          src="https://e7.pngegg.com/pngimages/621/149/png-clipart-minus-minus-thumbnail.png"
          alt="Decrement"
          width="32"
          height="32"
        />{" "}
        Decrement me
      </Button>
    </Container>
  );
}

export default Counter;
