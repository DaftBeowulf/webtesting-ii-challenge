import React from "react";

export default function Display({ count }) {
  return (
    <>
      <h2>Hitter's count</h2>
      <h3>balls: {count.balls}</h3>
      <h3>strikes: {count.strikes}</h3>
    </>
  );
}
