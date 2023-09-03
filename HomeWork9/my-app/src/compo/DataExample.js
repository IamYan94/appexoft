import React, { useState } from "react";
import "./DataExample.scss";

export const DataExample = () => {
  const [name, setName] = useState("Yan");
  const [age, setAge] = useState(19);
  const [isStudent, setIsStudent] = useState(true);

  const changeName = () => {
    setName("Danik");
  };

  const changeAge = () => {
    setAge(2020);
  };

  const toggleStudent = () => {
    setIsStudent(!isStudent);
  };

  return (
    <div className="data-example-container">
      <h1 className="header">Different data types</h1>
      <p className="paragraph">Name: {name}</p>
      <p className="paragraph">Age: {age}</p>
      <p className="paragraph">Student: {isStudent ? "yes" : "No"}</p>
      <button className="button" onClick={changeName}>
        changeName
      </button>
      <button className="button" onClick={changeAge}>
        changeAge
      </button>
      <button className="button" onClick={toggleStudent}>
        toggleStudent
      </button>
    </div>
  );
};
