import React from "react";
import Sidebar from "../Components/Sidebar";
import ActivityChart from "../Components/ActivityChart";
import RecentOrders from "../Components/RecentOrders";
import CustomerFeedback from "../Components/CustomerFeedback";
import Header from "../Components/Header";
import Extra from "../Components/extra";
import Total from "../Components/Total";
import NetProfitCard from "../Components/NetProfitCard";


export default function Dashboard() {
  return (

    <>
      <Sidebar />
      <Header />
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-md-8 col-sm-12 p-0">
              <Total />
            </div>
            <div className="col-md-4 col-sm-12">
              <NetProfitCard />
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 col-12 mb-3 mb-sm-0">
              <ActivityChart />
            </div>
            <div className="col-md-4 col-12">
              <Extra />
            </div>
          </div>

          <div className="row mt-4 mb-4">
            <div className="col-md-8">
              <RecentOrders />
            </div>

            <div className="col-md-4 col-12 mt-4 mt-sm-0">
              <CustomerFeedback />
            </div>
          </div>
        </div>
      </div>



    </>


  );
}
