import React from 'react';

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li><img src="images/icon.png" style={{ height: "40px" }}></img></li>
          <li><img src="images/home.png" style={{ height: "35px" }}></img></li>
          <li><img src="images/graph.png" style={{ height: "30px" }}></img></li>
          <li><img src="images/clip.png" style={{ height: "45px" }}></img></li>
          <li><img src="images/wallet.png" style={{ height: "30px" }}></img></li>
          <li><img src="images/bag.png" style={{ height: "40px" }}></img></li>
        </ul>
        <ul className="bottom" style={{ position: 'absolute', bottom: 0 }}>
          <li><img src="images/exit.png" alt="bag" style={{ height: "40px" }} /></li>
        </ul>
      </div>
    </>
  );
}
