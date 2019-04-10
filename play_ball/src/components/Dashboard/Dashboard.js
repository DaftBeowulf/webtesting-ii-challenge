import React from "react";

export default function Dashboard({ ball, strike, foul, hit, message }) {
  return (
    <>
      <button onClick={strike}>strike</button>
      <button onClick={foul}>foul</button>
      <button onClick={ball}>ball</button>
      <button onClick={hit}>hit</button>
      <h3 className="message">
        <strong>{message}</strong>
      </h3>
    </>
  );
}
