import React from "react";

export default function Extra() {
  const data = [
    { name: "Goals", image: "images/Goals.png" },
    { name: "PopularDish", image: "images/PopularDish.png" },
    { name: "Menus", image: "images/Menus.png", },
  ];

  return (
    <React.Fragment>
      <div className="extra-activity " style={{ height: "240px" }}>
        {data.map((item) => {
          return (
            <>
              <div className="row my-1" style={{ alignItems: 'center', }}>
                <div className="col-2 col-md-3">
                  <img src={item.image} style={{ height: "70px" }} />
                </div>
                <div className="col-8 col-md-6">
                  {item.name}
                </div>
                <div className="col-2 col-sm-3">
                  <img src="images/arrow.png" style={{ height: "70px" }} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </React.Fragment>
  );
}
