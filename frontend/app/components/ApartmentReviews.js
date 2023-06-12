import React from 'react';
import testPFP from '../../assets/profile/dog.jpg';
import './ApartmentReviews.css';

export default function ApartmentReviews({reviews, apartmentName}) {
  return (
    <div className="reviewContainer">
      <div className="reviewList">
        {(reviews.length === 0) ? <p className="noReviews"> No reviews yet! </p> :
          reviews.map((review) => (
            <div className="uniqueReview" key={review.userId}>
              <img className="reviewerPFP" src={testPFP}/>
              <p className="reviewerUsername">Name: {review.userId}</p>
              <p className="reviewerRating">Rating: {review.rating}/5</p>
              <p className="reviewerStory">{review.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export {ApartmentReviews};
