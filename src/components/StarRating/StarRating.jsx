import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.css"
function StarRating({noOfStars=5}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div id="StarRating">
      {[...Array(noOfStars)].map((_, index) => {
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inActive"}
            onClick={() => setRating(index)}
            onMouseMove={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
