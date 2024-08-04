import React from "react";
import ReactStars from "react-rating-stars-component";

export default function CustomerFeedback() {
  const feedback = [
    {
      name: "Jenny Wilson",
      rating: 5,
      comment:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
      image: "/images/user-pic.png",
    },
    {
      name: "Dianne Russell",
      rating: 4,
      comment:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
      image: "/images/userIcon.jpeg",
    },
    {
      name: "Devon Lane",
      rating: 3,
      comment:
        "Normally wings are wings, but theirs are lean meaty and tender and",
      image: "/images/customerIcon.jpeg",
    },
  ];

  return (
    <div className="feedback-textrightcontent ">
      <h5 className="saying-text">Customer's Feedback </h5>
      {feedback.map((item) => {
        return (
          <>
            <div className="row mt-sm-4 mt-3">
              <div className="col-md-12">
                <div className="user-reviewpicbox">
                  <img className="customer-image" src={item?.image} alt="" />
                  <h1 className="text-white ps-2">{item?.name}</h1>
                </div>
              </div>
            </div>
            <div className="rating-stars">
              <ReactStars
                name="review_rating"
                value={item.rating}
                count={5}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#FFD700"
                edit={false}
              />
            </div>
            <p>{item?.comment}</p>
            <div className="border-bottom pt-3"></div>
          </>
        );
      })}
    </div>
  );
}
