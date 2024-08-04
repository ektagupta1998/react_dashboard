import React from "react";
import { OrderStatus } from "../Config/constant";

export default function RecentOrders() {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
      image: "/images/user-pic.png",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48965786",
      amount: "$365.02",
      status: "Delivered",
      image: "/images/userIcon.jpeg",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78958215",
      amount: "$45.88",
      status: "Cancelled",
      image: "/images/customerIcon.jpeg",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
      image: "/images/customerIcon1.jpeg",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
      image: "/images/customerIcon.jpeg",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
      image: "/images/userIcon.jpeg",
    },
  ];

  const buttonCss = (status) => {
    if (status === OrderStatus.Delivered) {
      return "delivered-btn";
    } else if (status === OrderStatus.Pending) {
      return "pending-btn";
    } else if (status === OrderStatus.Cancelled) {
      return "cancelled-btn";
    }
  };

  return (
    <div className="recentOrder-textrightcontent">
      <h5 className="saying-text">Recent Orders</h5>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <img
                    className="customer-image"
                    src={order.image}
                    alt={order.customer}
                    style={{ marginRight: "10px", height: "40px", width: "40px" }}
                  />
                  {order.customer}
                </td>
                <td>{order.orderNo}</td>
                <td>{order.amount}</td>
                <td>
                  <span className={`badge ${buttonCss(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
