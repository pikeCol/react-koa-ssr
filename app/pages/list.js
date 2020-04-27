import React from "react";
const list = ["react真好玩", "koa有点意思", "ssr更有意思"];

const List = () => (
  <ul>
    {list.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export default List;
