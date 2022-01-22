import React from "react";
import "./upload.css"

export default function App() {

  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      console.log(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="container" >
      <input type="file" onChange={showFile} />
    </div>
  );
}