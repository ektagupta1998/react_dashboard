import React from "react";

const data = [
  {
    image: "/images/Totalorder.png",
    total: "Total Order",
    count: 75,
    percentage: 3,
  },
  {
    image: "/images/Totaldelivered.png",
    total: "Total Delivered",
    count: 70,
    percentage: 3,
  },
  {
    image: "/images/Totalcancelled.png",
    total: "Total Cancelled",
    count: 5,
    percentage: 3,
  },
  {
    image: "/images/Totalrevenue.png",
    total: "Total Revenue",
    count: "$12k",
    percentage: 3,
  },
];

export default function Total() {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="total-order">
              <div className="">
                <img src={item.image} alt={item.total} />
              </div>
              <div className="total-orders my-2">
                <h6>{item.total}</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <div className="dashboard-card-value">{item.count}</div>
                <div className="dashboard-card-per">{item.percentage}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
