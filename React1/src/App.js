import React from "react";
import "./App.css";
import LikeButton from "./components/LikeButton";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div className="App">
      <LikeButton />
      <ExpandableText
        text="Ростик привіт ,ось я зробив домашнє завдання ,чи все правильно?"
        maxChars={20}
      />
    </div>
  );
}

export default App;
