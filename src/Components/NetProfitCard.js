import React from "react";

export default function NetProfitCard() {
  return (
    <>
      <div className="net-profit-card">
        <div className="row align-item-center">
          <div className="col-md-6">
            <h4 style={{ fontSize: "15px" }}>Net Profit</h4>
            <h5 style={{fontSize: "37px",margin: "0px",PaddingTop: "6px"}}>$ 6759.25</h5>
            <p style={{paddingTop: "57px" , "marginBottom": "0px"}}>3%</p>
          </div>
          <div className="col-md-6" style={{ textAlign: 'center' }}>
            <img src="/images/netProfitChart.png" style={{ height: "94px" }}></img>
            <p style={{ fontSize: "9px" , paddingTop: "18px"}}> * The values here has been rounded off.</p>
          </div>
        </div>
      </div>
    </>
  );
}
